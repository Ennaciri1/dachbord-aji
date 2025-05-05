import React, { useState } from 'react';

export default function Events() {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Festival de Fès',
      description: 'Festival international de musique',
      image: '/api/placeholder/300/200',
      location: 'Fès, Maroc',
      price: '200 MAD',
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null,
    location: '',
    price: '',
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.description || !form.location || !form.price) {
      alert('Tous les champs sont obligatoires');
      return;
    }

    setEvents(prev => [
      ...prev,
      {
        id: String(prev.length + 1),
        title: form.title,
        description: form.description,
        image: form.image ? URL.createObjectURL(form.image) : '/api/placeholder/300/200',
        location: form.location,
        price: form.price,
      },
    ]);

    setForm({ title: '', description: '', image: null, location: '', price: '' });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Événements</h2>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Ajouter un événement</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['title', 'location', 'price'].map(field => (
            <div key={field}>
              <label className="block mb-1 capitalize">{field}</label>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}

          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Ajouter
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {events.map(ev => (
          <div key={ev.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{ev.title}</h3>
              <p className="text-gray-600 mb-2">{ev.description}</p>
              <div className="flex justify-between">
                <span>📍 {ev.location}</span>
                <span className="font-bold">{ev.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
