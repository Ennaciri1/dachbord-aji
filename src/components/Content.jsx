import React from 'react';
import { motion } from 'framer-motion';

// Import des pages
import HomePage from '../pages/Home';
import FeaturesPage from '../pages/Features';
import ServicesPage from '../pages/Services';
import EventsPage from '../pages/Events';
import DiscoverPage from '../pages/Discover';

const Content = ({ active }) => {
  // Animation de transition entre les pages
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  const renderPage = () => {
    switch (active) {
      case 'home':
        return <HomePage key="home" variants={pageVariants} />;
      case 'features':
        return <FeaturesPage key="features" variants={pageVariants} />;
      case 'services':
        return <ServicesPage key="services" variants={pageVariants} />;
      case 'events':
        return <EventsPage key="events" variants={pageVariants} />;
      case 'discover':
        return <DiscoverPage key="discover" variants={pageVariants} />;
      default:
        return <HomePage key="home" variants={pageVariants} />;
    }
  };

  return (
    <div className="p-6">
      {renderPage()}
    </div>
  );
};

export default Content;