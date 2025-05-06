import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FeaturesPage = ({ variants }) => {
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
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Fonctionnalités</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
          whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Ajouter un contenu
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Titre</label>
              <input
                className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-300 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Description</label>
              <textarea
                className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-300 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none"
                rows={4}
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-gray-300">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => setImage(e.target.files?.[0] || null)}
                className="w-full p-2 border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-600 dark:focus:border-blue-300 focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-300 transition-colors outline-none"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <span>Soumettre</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          </form>
        </motion.div>
        
        <div className="space-y-6">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
            whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Fonctionnalités populaires
            </h3>
            <ul className="space-y-3">
              {[
                "Recherche avancée",
                "Notifications en temps réel",
                "Tableau de bord personnalisable",
                "Mode hors ligne"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-center p-2 border-b dark:border-gray-700 last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-lg shadow text-white"
            whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-xl font-semibold mb-2">Besoin d'aide ?</h3>
            <p className="mb-4">Notre équipe de support est disponible 24/7 pour vous aider</p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
              Contacter le support
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesPage;