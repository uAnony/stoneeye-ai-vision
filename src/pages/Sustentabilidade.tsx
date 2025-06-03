
import React from 'react';
import Layout from '../components/Layout';
import { Settings, Check, Users } from 'lucide-react';

const Sustentabilidade = () => {
  const benefits = [
    {
      title: "Redução de Desperdício",
      description: "Nossa IA identifica o aproveitamento ideal de cada chapa, reduzindo desperdício em até 30%.",
      icon: Check,
      stats: "30% menos desperdício"
    },
    {
      title: "Otimização de Recursos",
      description: "Classificação precisa permite melhor planejamento e uso eficiente de recursos naturais.",
      icon: Settings,
      stats: "40% mais eficiência"
    },
    {
      title: "Processo Sustentável",
      description: "Tecnologia limpa que não gera resíduos e contribui para práticas mais sustentáveis.",
      icon: Users,
      stats: "100% digital"
    }
  ];

  const impactAreas = [
    {
      title: "Conservação de Recursos Naturais",
      description: "Ao maximizar o aproveitamento de cada chapa extraída, reduzimos a necessidade de novas extrações.",
      points: [
        "Menos extração de rochas",
        "Preservação de jazidas", 
        "Redução do impacto ambiental",
        "Uso mais inteligente dos recursos"
      ]
    },
    {
      title: "Redução de Resíduos",
      description: "Classificação precisa permite aproveitamento máximo do material, gerando menos resíduos.",
      points: [
        "Identificação de defeitos mínimos",
        "Reaproveitamento de peças pequenas",
        "Menos descarte de material",
        "Economia circular aplicada"
      ]
    },
    {
      title: "Eficiência Energética",
      description: "Processos automatizados reduzem o consumo de energia e aumentam a eficiência operacional.",
      points: [
        "Menos tempo de processamento",
        "Redução no consumo energético",
        "Operação mais eficiente",
        "Menor pegada de carbono"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
                  Tecnologia
                  <span className="block gradient-text">Sustentável</span>
                </h1>
                <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                  A StoneEye contribui para um futuro mais sustentável no setor de 
                  rochas ornamentais, otimizando recursos e reduzindo desperdícios 
                  através da inteligência artificial.
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">30%</div>
                    <div className="text-stone-400 text-sm">Menos Desperdício</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">40%</div>
                    <div className="text-stone-400 text-sm">Mais Eficiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">100%</div>
                    <div className="text-stone-400 text-sm">Digital</div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Sustentabilidade"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Benefícios Ambientais
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Como nossa tecnologia contribui diretamente para práticas mais 
                sustentáveis na indústria de rochas ornamentais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-stone-800 border border-stone-700 rounded-xl p-8 h-full hover:bg-stone-750 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <benefit.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-stone-200">
                      {benefit.title}
                    </h3>
                    <p className="text-stone-400 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <div className="text-blue-400 font-semibold">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Áreas de Impacto
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                As principais formas como nossa tecnologia contribui para 
                um setor mais sustentável e responsável.
              </p>
            </div>

            <div className="space-y-12">
              {impactAreas.map((area, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-3xl font-poppins font-bold mb-4 text-blue-400">
                      {area.title}
                    </h3>
                    <p className="text-xl text-stone-400 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="space-y-3">
                      {area.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check size={16} className="text-white" />
                          </div>
                          <span className="text-stone-300">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8 text-center">
                      <div className="text-6xl font-bold gradient-text mb-4">
                        {index === 0 ? '30%' : index === 1 ? '50%' : '40%'}
                      </div>
                      <div className="text-stone-400">
                        {index === 0 ? 'Redução no Desperdício' : 
                         index === 1 ? 'Menos Resíduos Gerados' : 
                         'Economia de Energia'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white">
              Visão de Futuro
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Acreditamos que a tecnologia pode transformar o setor de rochas ornamentais 
              em uma indústria mais sustentável, eficiente e responsável com o meio ambiente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">2025</h3>
                <p className="text-blue-100">Redução de 50% no desperdício do setor</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">2027</h3>
                <p className="text-blue-100">100% das operações utilizando IA</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">2030</h3>
                <p className="text-blue-100">Setor neutro em carbono</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustentabilidade;
