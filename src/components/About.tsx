
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-boitata-escuro via-boitata-azul to-boitata-escuro p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre o Boitatá</h2>
          <p className="text-xl text-boitata-ciano">Sistema Inteligente de Monitoramento e Prevenção de Queimadas</p>
        </div>

        <div className="grid gap-8">
          {/* Missão */}
          <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <span>Nossa Missão</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                O Sistema Boitatá foi desenvolvido pela equipe EcoFenix com o objetivo de revolucionar 
                o monitoramento e a prevenção de queimadas no Distrito Federal. Utilizando tecnologia 
                de ponta e inteligência artificial, oferecemos uma solução completa para proteger 
                nossos recursos naturais e comunidades.
              </p>
            </CardContent>
          </Card>

          {/* Características */}
          <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <span>Características Principais</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-boitata-ciano rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Monitoramento em Tempo Real</h4>
                      <p className="text-gray-400 text-sm">Detecção instantânea de focos de incêndio através de sensores IoT e imagens de satélite</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-boitata-laranja rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Alertas Inteligentes</h4>
                      <p className="text-gray-400 text-sm">Sistema proativo de notificações via WhatsApp e SMS</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-boitata-dourado rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Análise Preditiva</h4>
                      <p className="text-gray-400 text-sm">IA para prever áreas de alto risco baseado em dados meteorológicos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-boitata-verde rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Dashboard Intuitivo</h4>
                      <p className="text-gray-400 text-sm">Interface moderna e fácil de usar para gestores e bombeiros</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-boitata-azul rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Integração Completa</h4>
                      <p className="text-gray-400 text-sm">Conecta-se facilmente com sistemas existentes do Corpo de Bombeiros</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-boitata-terra rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-medium">Relatórios Detalhados</h4>
                      <p className="text-gray-400 text-sm">Análises e estatísticas para tomada de decisões estratégicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equipe EcoFenix */}
          <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <span className="text-2xl">🦅</span>
                <span>Equipe EcoFenix</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <p className="text-gray-300 leading-relaxed">
                  A EcoFenix é uma startup inovadora focada em soluções tecnológicas para proteção ambiental. 
                  Nossa equipe multidisciplinar combina expertise em desenvolvimento de software, inteligência 
                  artificial, sensoriamento remoto e gestão ambiental.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-fire rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h4 className="text-white font-medium">Desenvolvimento</h4>
                  <p className="text-gray-400 text-sm">Especialistas em tecnologias web, mobile e IoT</p>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-safe rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="text-white font-medium">Inteligência Artificial</h4>
                  <p className="text-gray-400 text-sm">Machine Learning e análise preditiva</p>
                </div>
                
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-r from-boitata-azul to-boitata-ciano rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h4 className="text-white font-medium">Meio Ambiente</h4>
                  <p className="text-gray-400 text-sm">Especialistas em ecologia e sustentabilidade</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impacto */}
          <Card className="bg-gradient-to-r from-boitata-verde/20 to-boitata-ciano/20 border-boitata-verde/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <span className="text-2xl">🌍</span>
                <span>Nosso Impacto</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-boitata-ciano mb-2">98%</p>
                  <p className="text-gray-300">Precisão na detecção</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-boitata-verde mb-2">45min</p>
                  <p className="text-gray-300">Tempo médio de alerta</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-boitata-dourado mb-2">60%</p>
                  <p className="text-gray-300">Redução no tempo de resposta</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
