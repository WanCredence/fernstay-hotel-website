import Image from "next/image";

const rooms = [
  { name: "Alpine Suite", desc: "Panoramic mountain views.", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80" },
  { name: "Forest Cabin", desc: "Secluded among pines.", img: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80" },
  { name: "Valley Room", desc: "Sunlit valley outlook.", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
];

export default function Rooms() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-8">Accommodations</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {rooms.map((r) => (
          <article key={r.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <Image src={r.img} alt={r.name} width={800} height={600} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-serif">{r.name}</h2>
              <p className="text-stone-600 mt-2">{r.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
