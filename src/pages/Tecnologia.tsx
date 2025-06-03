
import React from 'react';
import Layout from '../components/Layout';
import { Settings, Check, Users, ChevronRight } from 'lucide-react';

const Tecnologia = () => {
  const features = [
    {
      title: "Visão Computacional Avançada",
      description: "Algoritmos proprietários que analisam textura, padrões, cores e veios das rochas com precisão microscópica.",
      icon: Settings
    },
    {
      title: "Machine Learning Especializado", 
      description: "Rede neural treinada especificamente para rochas ornamentais, aprendendo continuamente com novos dados.",
      icon: Check
    },
    {
      title: "Classificação em Tempo Real",
      description: "Processamento instantâneo de imagens com classificação automática e relatórios detalhados.",
      icon: Users
    }
  ];

  const benefits = [
    "Precisão superior a 95% na classificação",
    "Redução de 90% no tempo de classificação",
    "Eliminação do erro humano",
    "Padronização total do processo",
    "Relatórios detalhados e rastreabilidade",
    "Integração com sistemas existentes"
  ];

  const techSpecs = [
    { label: "Precisão", value: "> 95%" },
    { label: "Velocidade", value: "500 chapas/hora" },
    { label: "Tipos de Rocha", value: "Mármore, Granito, Quartzito, Travertino" },
    { label: "Formatos Suportados", value: "Todos os tamanhos padrão" },
    { label: "Tempo de Resposta", value: "< 2 segundos" },
    { label: "Disponibilidade", value: "99.9%" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                Nossa
                <span className="block gradient-text">Tecnologia</span>
              </h1>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
                Inteligência artificial proprietária desenvolvida especificamente para 
                classificação de rochas ornamentais, combinando visão computacional 
                avançada com machine learning especializado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Como Funciona
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Captura de Imagem</h3>
                      <p className="text-stone-400 leading-relaxed">
                        Sistema de câmeras de alta resolução captura imagens detalhadas 
                        das chapas em múltiplos ângulos e condições de iluminação.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Análise por IA</h3>
                      <p className="text-stone-400 leading-relaxed">
                        Nossa IA analisa textura, padrões, cores, veios e características 
                        específicas da rocha utilizando algoritmos de visão computacional.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Classificação Automática</h3>
                      <p className="text-stone-400 leading-relaxed">
                        O sistema classifica automaticamente a chapa por qualidade, 
                        padrão e características, gerando relatórios detalhados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Integração e Relatórios</h3>
                      <p className="text-stone-400 leading-relaxed">
                        Resultados são integrados ao seu sistema de gestão com 
                        relatórios completos e rastreabilidade total.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tecnologia de IA"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Tecnologias Principais
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Combinamos as mais avançadas tecnologias de IA para entregar 
                resultados excepcionais na classificação de rochas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 h-full hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <feature.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-stone-200">
                      {feature.title}
                    </h3>
                    <p className="text-stone-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                  Benefícios
                  <span className="block gradient-text">Comprovados</span>
                </h2>
                <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                  Nossa tecnologia proporciona vantagens tangíveis e mensuráveis 
                  para sua operação.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-white" />
                      </div>
                      <span className="text-stone-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Benefícios da tecnologia"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Especificações Técnicas
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Dados técnicos e métricas de performance de nossa solução.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techSpecs.map((spec, index) => (
                <div key={index} className="bg-stone-900 border border-stone-800 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {spec.value}
                  </div>
                  <div className="text-stone-400">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tecnologia;
