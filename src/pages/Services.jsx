import React from 'react';

const data = [
  { id: 'e-sim', name: 'E‑SIM' },
  { id: 'visa', name: 'Visas' },
  { id: 'tickets', name: 'Billets' },
  { id: 'flights', name: 'Vols' },
  { id: 'accommodation', name: 'Hébergement' },
  { id: 'transport', name: 'Transport' },
  { id: 'visit', name: 'Visiter le Maroc' },
  { id: 'food', name: 'Gastronomie' },
  { id: 'contacts', name: 'Contacts importants' },
];

export default function Services() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(s => (
          <div
            key={s.id}
            className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 cursor-pointer"
          >
            <h3 className="text-lg font-semibold">{s.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
