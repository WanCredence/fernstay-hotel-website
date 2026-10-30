import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-2">Contact & Booking Inquiry</h1>
      <p className="text-stone-600 mb-8">Concept project — no real bookings accepted.</p>
      <ContactForm />
      <div className="mt-12 text-stone-600">
        <p>Location: WanCredence concept site.</p>
      </div>
    </div>
  );
}
