import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Snowy mountains" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif">The Fernstay</h1>
          <p className="mt-4 text-lg md:text-xl">A boutique mountain retreat concept.</p>
          <Link href="/contact" className="mt-8 inline-block bg-white text-stone-900 px-6 py-3 rounded-full hover:bg-stone-100 transition">Inquire</Link>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-serif">Welcome</h2>
        <p className="mt-4 text-stone-600">Concept project showcasing a premium resort experience.</p>
      </section>
    </>
  );
}
