"use client";
import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(form: FormData) {
    const e: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name) e.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = "Valid email required";
    if (message.length < 10) e.message = "Message must be at least 10 characters";
    return e;
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  }

  if (submitted) return <p className="text-emerald-700 font-medium">Thank you. Your inquiry has been received (concept demo).</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input id="name" name="name" className="w-full border border-stone-300 rounded px-3 py-2" />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" className="w-full border border-stone-300 rounded px-3 py-2" />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={4} className="w-full border border-stone-300 rounded px-3 py-2" />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="bg-stone-900 text-white px-6 py-2 rounded-full hover:bg-stone-700 transition">Send Inquiry</button>
    </form>
  );
}
