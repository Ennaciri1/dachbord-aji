import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const DiscoverPage = ({ variants }) => {
  const places = [
    { 
      id: '1', 
      title: 'Désert du Sahara', 
      image: '/api/placeholder/300/200',
      description: 'Explorez les magnifiques dunes de sable du Sahara marocain',
      location: 'Merzouga, Maroc',
      rating: 4.9
    },
    { 
      id: '2', 
      title: 'Chefchaouen', 
      image: '/api/placeholder/300/200',
      description: 'Découvrez la fameuse ville bleue du nord du Maroc',
      location: 'Chefchaouen, Maroc',
      rating: 4.8
    },
    { 
      id: '3', 
      title: 'Jardins Majorelle', 
      image: '/api/placeholder/300/200',
      description: 'Visitez ces jardins botaniques et paysagers uniques à Marrakech',
      location: 'Marrakech, Maroc',
      rating: 4.7
    },
    { 
      id: '4', 
      title: 'Médina de Fès', 
      image: '/api/placeholder/300/200',
      description: 'Plongez dans l\'une des plus grandes médinas piétonnes du monde',
      location: 'Fès, Maroc',
      rating: 4.6
    }
  ];

  const categories = [
    "Plages", "Montagnes", "Déserts", "Villes historiques", 
    "Artisanat", "Gastronomie", "Architecture"
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Découvrir le Maroc</h2>

      {/* Catégories */}
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-2">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full whitespace-nowrap 
                        shadow hover:shadow-md text-gray-700 dark:text-gray-300 border 
                        border-gray-200 dark:border-gray-700 hover:bg-blue-50 hover:text-blue-600 
                        dark:hover:bg-gray-700 dark:hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Destinations populaires */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Destinations populaires
          </h3>
          <button className="text-blue-600 dark:text-blue-300 hover:underline flex items-center">
            Voir tout <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <motion.div 
              key={place.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-0 right-0 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 font-bold px-2 py-1 m-2 rounded-lg text-sm flex items-center">
                  <span className="mr-1">{place.rating}</span>
                  <span>★</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{place.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{place.description}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="mr-1">📍</span>
                  <span>{place.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bannière promotionnelle */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-6 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Offre spéciale</h3>
            <p className="mb-2">20% de réduction sur toutes les réservations d'excursions désert</p>
            <p className="text-sm text-blue-100">Offre valable jusqu'au 31 mai 2025</p>
          </div>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200">
            En savoir plus
          </button>
        </div>
      </motion.div>

      {/* Guide interactif */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Guide interactif
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Utilisez notre guide interactif pour planifier votre voyage au Maroc. Sélectionnez vos centres d'intérêt 
          et nous vous proposerons un itinéraire personnalisé.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          Commencer
        </button>
      </div>
    </motion.div>
  );
};

export default DiscoverPage;