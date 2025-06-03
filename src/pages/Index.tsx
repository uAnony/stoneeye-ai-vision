
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight, Check, Settings, Users, Calendar } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Classificação Inteligente",
      description: "IA proprietária que identifica e classifica chapas com precisão superior a 95%",
      icon: Settings
    },
    {
      title: "Redução de Erros",
      description: "Eliminação do erro humano na classificação, garantindo maior padronização",
      icon: Check
    },
    {
      title: "Aumento de Produtividade",
      description: "Classificação até 10x mais rápida que métodos tradicionais",
      icon: Users
    }
  ];

  const stats = [
    { value: "95%", label: "Precisão na Classificação" },
    { value: "10x", label: "Mais Rápido" },
    { value: "30%", label: "Redução de Desperdício" },
    { value: "500+", label: "Chapas/Hora" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.8)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        {/* Animated Elements */}
        <div className="absolute inset-0 z-1">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-float"></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 section-padding text-center">
          <div className="container-max max-w-4xl">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
                Classificação
                <span className="block gradient-text">Inteligente</span>
                de Chapas com IA
              </h1>
              <p className="text-xl md:text-2xl text-stone-300 mb-8 max-w-3xl mx-auto">
                Revolucione sua operação com nossa inteligência artificial proprietária 
                para classificação automatizada de mármore, granito e rochas ornamentais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/tecnologia"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>Conheça Nossa Tecnologia</span>
                  <ChevronRight size={20} />
                </Link>
                <Link 
                  to="/contato"
                  className="border-2 border-stone-300 text-stone-300 hover:bg-stone-300 hover:text-stone-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                >
                  Solicitar Demonstração
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-stone-900 to-stone-800">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-stone-400">
                    {stat.label}
                  </div>
                </div>
              ))}
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
                Por que escolher a
                <span className="block gradient-text">StoneEye?</span>
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Nossa tecnologia de inteligência artificial oferece precisão incomparável 
                na classificação de rochas ornamentais.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Pronto para revolucionar sua operação?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Descubra como nossa IA pode transformar sua classificação de chapas 
              e aumentar sua produtividade.
            </p>
            <Link 
              to="/contato"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Entre em Contato</span>
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
