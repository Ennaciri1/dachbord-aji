import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ServicesPage = ({ variants }) => {
  const data = [
    { id: 'e-sim', name: 'E‑SIM', icon: '📱' },
    { id: 'visa', name: 'Visas', icon: '🛂' },
    { id: 'tickets', name: 'Billets', icon: '🎫' },
    { id: 'flights', name: 'Vols', icon: '✈️' },
    { id: 'accommodation', name: 'Hébergement', icon: '🏨' },
    { id: 'transport', name: 'Transport', icon: '🚗' },
    { id: 'visit', name: 'Visiter le Maroc', icon: '🏝️' },
    { id: 'food', name: 'Gastronomie', icon: '🍽️' },
    { id: 'contacts', name: 'Contacts importants', icon: '📞' },
  ];

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Services</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-md transition-all cursor-pointer group"
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="flex items-center">
              <div className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {service.name}
              </h3>
              <ChevronRight 
                size={16} 
                className="ml-auto text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors transform group-hover:translate-x-1" 
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Services personnalisés
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Nous pouvons créer des offres sur mesure pour répondre à vos besoins spécifiques.
          Contactez notre équipe pour plus d'informations.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          Demander un devis
        </button>
      </div>
    </motion.div>
  );
};

export default ServicesPage;