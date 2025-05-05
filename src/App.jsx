import React, { useState } from 'react';
import { Home, FileText, Globe, Calendar, Compass } from 'lucide-react';

import Sidebar from './components/Sidebar';
import HomePage from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';
import Events from './pages/Events';
import Discover from './pages/Discover';

export default function App() {
  const [active, setActive] = useState('home');

  const menu = [
    { id: 'home', label: 'Accueil', icon: <Home className="w-5 h-5" /> },
    { id: 'features', label: 'Fonctionnalités', icon: <FileText className="w-5 h-5" /> },
    { id: 'services', label: 'Services', icon: <Globe className="w-5 h-5" /> },
    { id: 'events', label: 'Événements', icon: <Calendar className="w-5 h-5" /> },
    { id: 'discover', label: 'Découvrir', icon: <Compass className="w-5 h-5" /> },
  ];

  const renderPage = () => {
    switch (active) {
      case 'home':
        return <HomePage />;
      case 'features':
        return <Features />;
      case 'services':
        return <Services />;
      case 'events':
        return <Events />;
      case 'discover':
        return <Discover />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex">
      <Sidebar items={menu} active={active} onSelect={setActive} />
      <main className="flex-1 overflow-y-auto">{renderPage()}</main>
    </div>
  );
}
