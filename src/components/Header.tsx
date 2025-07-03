
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'mapa', label: 'Mapa' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="bg-gradient-to-r from-boitata-escuro to-boitata-azul shadow-lg border-b border-boitata-ciano/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo e Nome */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-fire rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Boitatá</h1>
              <p className="text-boitata-ciano text-sm">Monitoramento e Prevenção de Queimadas</p>
            </div>
          </div>

          {/* Menu de Navegação */}
          <nav className="flex space-x-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={`transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-boitata-ciano text-boitata-escuro hover:bg-boitata-ciano/90'
                    : 'text-white hover:bg-white/10 hover:text-boitata-ciano'
                }`}
                onClick={() => onTabChange(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
