import React from 'react';
import { motion } from 'framer-motion';

const HomePage = ({ variants }) => {
  const stats = [
    { label: 'Utilisateurs', value: '2,345', change: '+12%', icon: '👥' },
    { label: 'Événements', value: '42', change: '+5%', icon: '📅' },
    { label: 'Services', value: '18', change: '+2', icon: '🌐' },
  ];

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
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Tableau de bord</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center">
              <div className="text-2xl mr-3">{stat.icon}</div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
              </div>
              <div className="ml-auto text-sm text-green-500">{stat.change}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Bienvenue */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Bienvenue sur Super App
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Explorez nos différents services et fonctionnalités. Naviguez dans le
          menu pour tout découvrir. Notre application est optimisée pour vous offrir
          la meilleure expérience possible.
        </p>
        <div className="mt-4 pt-4 border-t dark:border-gray-700">
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Quoi de neuf ?</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="mr-2 text-blue-600">•</span>
              Nouvelle fonctionnalité de recherche améliorée
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="mr-2 text-blue-600">•</span>
              Mode sombre disponible
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;