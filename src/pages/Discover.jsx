import React from 'react';

const items = [
  { id: '1', title: 'Désert marocain', image: '/api/placeholder/300/200' },
  { id: '2', title: 'Chefchaouen', image: '/api/placeholder/300/200' },
];

export default function Discover() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Découvrir</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(it => (
          <div
            key={it.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={it.image} alt={it.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{it.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
