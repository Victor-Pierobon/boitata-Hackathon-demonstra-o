
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Dashboard: React.FC = () => {
  const citiesData = [
    { name: 'Brasília', risk: 'Alto', riskLevel: 80, color: 'bg-orange-500' },
    { name: 'Taguatinga', risk: 'Médio', riskLevel: 60, color: 'bg-yellow-500' },
    { name: 'Ceilândia', risk: 'Muito Alto', riskLevel: 95, color: 'bg-red-500' },
    { name: 'Gama', risk: 'Baixo', riskLevel: 30, color: 'bg-green-500' },
    { name: 'Sobradinho', risk: 'Alto', riskLevel: 75, color: 'bg-orange-500' },
    { name: 'Planaltina', risk: 'Muito Alto', riskLevel: 90, color: 'bg-red-500' },
    { name: 'São Sebastião', risk: 'Médio', riskLevel: 55, color: 'bg-yellow-500' },
    { name: 'Santa Maria', risk: 'Baixo', riskLevel: 25, color: 'bg-green-500' }
  ];

  const riskDistribution = [
    { level: 'Muito Alto', count: 8, color: 'bg-red-500' },
    { level: 'Alto', count: 12, color: 'bg-orange-500' },
    { level: 'Médio', count: 15, color: 'bg-yellow-500' },
    { level: 'Baixo', count: 20, color: 'bg-green-500' },
    { level: 'Muito Baixo', count: 5, color: 'bg-blue-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-boitata-escuro via-boitata-azul to-boitata-escuro p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Dashboard - Monitoramento DF</h2>
          <p className="text-boitata-ciano">Visão geral do risco de incêndio por região</p>
        </div>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-600/20 to-red-500/10 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-300 text-sm font-medium">Focos Ativos</p>
                  <p className="text-3xl font-bold text-white">25</p>
                </div>
                <div className="text-4xl">🔥</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/20 to-orange-500/10 border-orange-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-300 text-sm font-medium">Área Queimada</p>
                  <p className="text-3xl font-bold text-white">284</p>
                  <p className="text-orange-300 text-xs">hectares</p>
                </div>
                <div className="text-4xl">📊</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-300 text-sm font-medium">Previsão 24h</p>
                  <p className="text-lg font-bold text-white">Risco Elevado</p>
                  <p className="text-blue-300 text-xs">Baixa umidade</p>
                </div>
                <div className="text-4xl">⚠️</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/20 to-green-500/10 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300 text-sm font-medium">Controlados</p>
                  <p className="text-3xl font-bold text-white">18</p>
                  <p className="text-green-300 text-xs">últimas 24h</p>
                </div>
                <div className="text-4xl">✅</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Risco por Cidade */}
          <div className="lg:col-span-2">
            <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Nível de Risco por Cidade</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {citiesData.map((city, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-medium">{city.name}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium text-white ${city.color}`}>
                          {city.risk}
                        </span>
                      </div>
                      <Progress 
                        value={city.riskLevel} 
                        className="h-2"
                      />
                      <p className="text-gray-400 text-xs mt-1">{city.riskLevel}% de risco</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Distribuição de Risco */}
          <div>
            <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Distribuição de Focos</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {riskDistribution.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <span className="text-gray-300 text-sm">{item.level}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold">{item.count}</span>
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${item.color}`}
                            style={{ width: `${(item.count / 60) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">60</p>
                    <p className="text-gray-400 text-sm">Total de Focos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alertas Recentes */}
            <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white">Alertas Recentes</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
                    <p className="text-red-400 text-sm font-medium">Novo foco detectado</p>
                    <p className="text-gray-300 text-xs">Ceilândia - 16:45</p>
                  </div>
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded">
                    <p className="text-orange-400 text-sm font-medium">Risco elevado</p>
                    <p className="text-gray-300 text-xs">Planaltina - 15:30</p>
                  </div>
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
                    <p className="text-green-400 text-sm font-medium">Foco controlado</p>
                    <p className="text-gray-300 text-xs">Gama - 14:20</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
