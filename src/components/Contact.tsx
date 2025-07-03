
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-boitata-escuro via-boitata-azul to-boitata-escuro p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Contato</h2>
          <p className="text-xl text-boitata-ciano">Entre em contato com a equipe EcoFenix</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações de Contato */}
          <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <span>Informações de Contato</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-boitata-ciano/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-300">contato@ecofenix.com.br</p>
                  <p className="text-gray-300">vendas@ecofenix.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-boitata-verde/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">WhatsApp</h4>
                  <p className="text-gray-300">(61) 99999-0001</p>
                  <p className="text-gray-400 text-sm">Suporte técnico 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-boitata-laranja/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Endereço</h4>
                  <p className="text-gray-300">SCS Quadra 02, Bloco C</p>
                  <p className="text-gray-300">Sala 1001 - Asa Sul</p>
                  <p className="text-gray-300">Brasília/DF - CEP: 70300-500</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-boitata-azul/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🌐</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Website</h4>
                  <p className="text-gray-300">www.ecofenix.com.br</p>
                  <p className="text-gray-300">LinkedIn: /company/ecofenix</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Contato */}
          <Card className="bg-black/20 border-boitata-ciano/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-3">
                <span className="text-2xl">✉️</span>
                <span>Solicite uma Demonstração</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-boitata-ciano focus:ring-1 focus:ring-boitata-ciano"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-boitata-ciano focus:ring-1 focus:ring-boitata-ciano"
                    placeholder="seu.email@empresa.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Organização
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-boitata-ciano focus:ring-1 focus:ring-boitata-ciano"
                    placeholder="Nome da sua organização"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-boitata-ciano focus:ring-1 focus:ring-boitata-ciano"
                    placeholder="(61) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-boitata-ciano focus:ring-1 focus:ring-boitata-ciano"
                    placeholder="Conte-nos sobre suas necessidades de monitoramento..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-boitata-ciano to-boitata-verde hover:from-boitata-ciano/90 hover:to-boitata-verde/90 text-boitata-escuro font-medium py-3 transition-all duration-300"
                >
                  Solicitar Demonstração
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-r from-boitata-laranja/20 to-boitata-dourado/20 border-boitata-laranja/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Revolucionar o Monitoramento de Queimadas?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agende uma demonstração personalizada do Sistema Boitatá e veja como nossa tecnologia 
              pode proteger sua região contra incêndios florestais de forma proativa e inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-boitata-ciano hover:bg-boitata-ciano/90 text-boitata-escuro font-medium px-8 py-3">
                📞 Agendar Ligação
              </Button>
              <Button 
                variant="outline" 
                className="border-boitata-ciano text-boitata-ciano hover:bg-boitata-ciano hover:text-boitata-escuro font-medium px-8 py-3"
              >
                💬 WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
