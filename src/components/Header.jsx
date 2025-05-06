import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm p-4 md:hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-gray-200">Super App</h1>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
};

export default Header;