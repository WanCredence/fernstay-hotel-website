import { Wifi, Utensils, Mountain, Dumbbell } from "lucide-react";

const items = [
  { icon: Wifi, title: "Connectivity", desc: "High-speed internet throughout." },
  { icon: Utensils, title: "Dining", desc: "Farm-to-table cuisine." },
  { icon: Mountain, title: "Trails", desc: "Guided mountain excursions." },
  { icon: Dumbbell, title: "Gym", desc: "Fully equipped fitness center." },

];

export default function Amenities() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-8">Amenities & Experiences</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Icon className="mx-auto mb-3" />
            <h2 className="font-serif text-lg">{title}</h2>
            <p className="text-stone-600 text-sm mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
