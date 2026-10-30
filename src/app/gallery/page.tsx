import Image from "next/image";

const imgs = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&q=80",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-8">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <Image key={i} src={src} alt={`Gallery image ${i + 1}`} width={600} height={600} className="w-full h-64 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
}
