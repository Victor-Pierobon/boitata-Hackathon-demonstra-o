
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FireFocus {
  id: number;
  lat: number;
  lng: number;
  location: string;
  status: 'Ativo' | 'Controlado' | 'Monitoramento';
  risk: 'Muito Alto' | 'Alto' | 'Médio' | 'Baixo';
  datetime: string;
  area: string;
}

const MapView: React.FC = () => {
  const [selectedFocus, setSelectedFocus] = useState<FireFocus | null>(null);

  const fireFoci: FireFocus[] = [
    {
      id: 1,
      lat: 35,
      lng: 25,
      location: 'Parque Nacional de Brasília',
      status: 'Ativo',
      risk: 'Muito Alto',
      datetime: '03/07/2025 - 14:30',
      area: '15.2 hectares'
    },
    {
      id: 2,
      lat: 65,
      lng: 40,
      location: 'Reserva Ecológica do Guará',
      status: 'Controlado',
      risk: 'Alto',
      datetime: '03/07/2025 - 12:15',
      area: '8.7 hectares'
    },
    {
      id: 3,
      lat: 45,
      lng: 60,
      location: 'Área Rural de Planaltina',
      status: 'Monitoramento',
      risk: 'Médio',
      datetime: '03/07/2025 - 16:45',
      area: '3.1 hectares'
    },
    {
      id: 4,
      lat: 30,
      lng: 70,
      location: 'Parque da Cidade',
      status: 'Ativo',
      risk: 'Alto',
      datetime: '03/07/2025 - 15:20',
      area: '12.5 hectares'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Muito Alto': return 'bg-red-500';
      case 'Alto': return 'bg-orange-500';
      case 'Médio': return 'bg-yellow-500';
      case 'Baixo': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'text-red-400';
      case 'Controlado': return 'text-green-400';
      case 'Monitoramento': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-boitata-escuro via-boitata-azul to-boitata-escuro p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Mapa de Monitoramento - Distrito Federal</h2>
          <p className="text-boitata-ciano">Visualização em tempo real dos focos de incêndio</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Mapa Principal */}
          <div className="lg:col-span-3">
            <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative bg-gradient-to-br from-green-900/40 to-green-600/20 rounded-lg overflow-hidden" style={{ height: '600px' }}>
                  {/* Simulação do mapa do DF */}
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 400 300" className="w-full h-full">
                      <path
                        d="M50 50 L350 50 L350 250 L50 250 Z M100 100 L150 80 L200 100 L180 150 L120 150 Z M250 120 L300 100 L320 150 L280 180 L240 160 Z"
                        fill="rgba(62, 142, 65, 0.3)"
                        stroke="rgba(0, 212, 170, 0.5)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Focos de Incêndio */}
                  {fireFoci.map((focus) => (
                    <div
                      key={focus.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ left: `${focus.lng}%`, top: `${focus.lat}%` }}
                      onClick={() => setSelectedFocus(focus)}
                    >
                      <div className={`w-6 h-6 rounded-full ${getRiskColor(focus.risk)} animate-pulse-fire shadow-lg`}>
                        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"></div>
                      </div>
                    </div>
                  ))}

                  {/* Controles do Mapa */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="bg-black/50 text-white p-2 rounded hover:bg-black/70 transition-colors">
                      +
                    </button>
                    <button className="bg-black/50 text-white p-2 rounded hover:bg-black/70 transition-colors">
                      -
                    </button>
                  </div>

                  {/* Popup de Informações */}
                  {selectedFocus && (
                    <div 
                      className="absolute z-10"
                      style={{ 
                        left: `${selectedFocus.lng}%`, 
                        top: `${selectedFocus.lat - 15}%`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <Card className="bg-black/90 border-boitata-ciano/50 backdrop-blur-sm min-w-72">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-semibold text-sm">{selectedFocus.location}</h3>
                            <button 
                              onClick={() => setSelectedFocus(null)}
                              className="text-gray-400 hover:text-white"
                            >
                              ✕
                            </button>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-300">Status:</span>
                              <span className={`font-medium ${getStatusColor(selectedFocus.status)}`}>
                                {selectedFocus.status}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Risco:</span>
                              <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(selectedFocus.risk)} text-white`}>
                                {selectedFocus.risk}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Área:</span>
                              <span className="text-white">{selectedFocus.area}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-300">Detectado:</span>
                              <span className="text-white">{selectedFocus.datetime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Painel Lateral */}
          <div className="space-y-6">
            {/* Legenda */}
            <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-3">Legenda</h3>
                <div className="space-y-2">
                  {['Muito Alto', 'Alto', 'Médio', 'Baixo'].map((risk) => (
                    <div key={risk} className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full ${getRiskColor(risk)}`}></div>
                      <span className="text-gray-300 text-sm">{risk}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resumo */}
            <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-3">Resumo Atual</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Focos Ativos:</span>
                    <span className="text-red-400 font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Controlados:</span>
                    <span className="text-green-400 font-bold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Em Monitoramento:</span>
                    <span className="text-yellow-400 font-bold">5</span>
                  </div>
                  <div className="border-t border-gray-600 pt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total de Focos:</span>
                      <span className="text-white font-bold">25</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerta WhatsApp */}
            <Card className="bg-gradient-to-r from-green-600/20 to-green-500/20 border-green-500/30 backdrop-blur-sm">
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-2">🚨 Alertas WhatsApp</h3>
                <p className="text-gray-300 text-sm mb-3">Receba notificações em tempo real dos focos de incêndio</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors">
                  Conectar WhatsApp
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
