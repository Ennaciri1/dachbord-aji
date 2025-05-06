import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  FileText, 
  Globe, 
  Calendar, 
  Compass, 
  ChevronRight, 
  Moon, 
  Sun 
} from 'lucide-react';

const Sidebar = ({ active, onSelect, isOpen, isDarkMode, toggleTheme }) => {
  const menu = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { id: 'features', label: 'Fonctionnalités', icon: <FileText className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'events', label: 'Événements', icon: <Calendar className="w-5 h-5" /> },
    { id: 'discover', label: 'Découvrir', icon: <Compass className="w-5 h-5" /> },
  ];

  return (
    <aside 
      className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed md:static z-20 w-64 h-screen transition-transform duration-300 ease-in-out 
        bg-white dark:bg-gray-800 shadow-lg overflow-y-auto`}
    >
      <div className="p-4 border-b dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-gray-200">Super App</h1>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <nav className="mt-4">
        {menu.map(item => (
          <motion.button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              w-full flex items-center p-3 text-left transition-colors
              ${active === item.id
                ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-300'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}
              group relative overflow-hidden
            `}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="mr-3 text-current">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
            {active === item.id && (
              <ChevronRight className="absolute right-3 text-blue-600 dark:text-blue-300" size={16} />
            )}
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-300"
              initial={{ width: "0%" }}
              animate={{ width: active === item.id ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t dark:border-gray-700">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Super App
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;