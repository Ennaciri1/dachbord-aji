import React, { useState } from 'react';

export default function Features() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Formulaire soumis', { title, description, image });
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Fonctionnalités</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl mb-4">Ajouter un contenu</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Titre</label>
            <input
              className="w-full p-2 border rounded"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              rows={4}
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setImage(e.target.files?.[0] || null)}
              className="w-full p-2 border rounded"
            />
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
}
