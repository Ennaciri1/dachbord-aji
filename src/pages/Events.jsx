import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EventsPage = ({ variants }) => {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Festival de Fès',
      description: 'Festival international de musique sacrée avec des artistes du monde entier',
      image: '/api/placeholder/300/200',
      location: 'Fès, Maroc',
      price: '200 MAD',
      date: '2025-06-12',
    },
    {
      id: '2',
      title: 'Exposition d\'art contemporain',
      description: 'Découvrez les œuvres d\'artistes marocains émergents',
      image: '/api/placeholder/300/200',
      location: 'Rabat, Maroc',
      price: 'Entrée libre',
      date: '2025-05-20',
    },
  ]);

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: null,
    location: '',
    price: '',
    date: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

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
        id: String(Date.now()),
        title: form.title,
        description: form.description,
        image: form.image ? URL.createObjectURL(form.image) : '/api/placeholder/300/200',
        location: form.location,
        price: form.price,
        date: form.date || new Date().toISOString().split('T')[0],
      },
    ]);

    setForm({ title: '', description: '', image: null, location: '', price: '', date: '' });
    setIsFormVisible(false);
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Événements</h2>
        <button 
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
        >
          {isFormVisible ? 'Annuler' : 'Ajouter un événement'}
        </button>
      </div>

      {/* Formulaire d'ajout d'événement */}
      {isFormVisible && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Ajouter un événement
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4 md:col-span-1">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Titre</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Lieu</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-gray-700 dark:text-gray-300">Prix</label>
                  <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-700 dark:text-gray-300">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 md:col-span-1">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                  name="description"
                  rows={3}
                  value={form.description}
                  onChange={handleChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                Ajouter
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Liste des événements */}
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <motion.div 
            key={event.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-sm">
                {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{event.description}</p>
              <div className="flex justify-between text-sm">
                <span className="flex items-center text-gray-500 dark:text-gray-400">
                  <span className="mr-1">📍</span>
                  {event.location}
                </span>
                <span className="font-bold text-blue-600 dark:text-blue-300">{event.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventsPage;