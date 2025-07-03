
import React, { useState } from 'react';
import Header from '@/components/Header';
import MapView from '@/components/MapView';
import Dashboard from '@/components/Dashboard';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeTab, setActiveTab] = useState('mapa');

  const renderContent = () => {
    switch (activeTab) {
      case 'mapa':
        return <MapView />;
      case 'dashboard':
        return <Dashboard />;
      case 'sobre':
        return <About />;
      case 'contato':
        return <Contact />;
      default:
        return <MapView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-boitata">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Index;
