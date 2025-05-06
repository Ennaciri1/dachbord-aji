import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Import des composants
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';

export default function App() {
  const [active, setActive] = useState('home');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Appliquer le mode sombre au niveau du document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Responsivité - fermer la sidebar par défaut sur mobile
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    // Appliquer au chargement
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex h-screen bg-gray-50 ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar mobile toggle button */}
      <button 
        className="fixed z-20 bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg md:hidden" 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Overlay pour mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <Sidebar 
        active={active} 
        onSelect={setActive}
        isOpen={isSidebarOpen}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto transition-all duration-300 dark:bg-gray-900">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Content active={active} />
      </main>
    </div>
  );
}