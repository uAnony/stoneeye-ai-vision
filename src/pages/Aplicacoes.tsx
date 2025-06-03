
import React from 'react';
import Layout from '../components/Layout';
import { Users, Settings, Check } from 'lucide-react';

const Aplicacoes = () => {
  const applications = [
    {
      title: "Marmorarias",
      description: "Classificação precisa para seleção e organização de chapas, otimizando o atendimento ao cliente.",
      benefits: [
        "Seleção mais rápida de chapas",
        "Melhor apresentação ao cliente",
        "Redução de devoluções",
        "Organização otimizada do estoque"
      ],
      icon: Users,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Beneficiadoras",
      description: "Automatização completa da classificação para grandes volumes de produção industrial.",
      benefits: [
        "Classificação de até 500 chapas/hora",
        "Padronização total do processo",
        "Redução de custos operacionais",
        "Rastreabilidade completa"
      ],
      icon: Settings,
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Exportadoras",
      description: "Garantia de qualidade e padronização para atender padrões internacionais rigorosos.",
      benefits: [
        "Classificação por padrões internacionais",
        "Certificação de qualidade",
        "Relatórios detalhados para exportação",
        "Conformidade com regulamentações"
      ],
      icon: Check,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const useCases = [
    {
      title: "Controle de Qualidade",
      description: "Identificação automática de defeitos, fissuras e irregularidades nas chapas."
    },
    {
      title: "Separação por Padrões",
      description: "Classificação automática por tipos de veios, texturas e padrões visuais."
    },
    {
      title: "Gestão de Estoque",
      description: "Organização inteligente do estoque baseada em características e qualidade."
    },
    {
      title: "Relatórios de Produção",
      description: "Análises detalhadas de produção com métricas de qualidade e produtividade."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-padding">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Aplicações da
              <span className="block gradient-text">StoneEye</span>
            </h1>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
              Nossa tecnologia de IA se adapta a diferentes necessidades do setor, 
              desde pequenas marmorarias até grandes complexos industriais.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            {applications.map((app, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <app.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                      {app.title}
                    </h2>
                  </div>
                  <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="space-y-4">
                    {app.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check size={16} className="text-white" />
                        </div>
                        <span className="text-stone-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Casos de Uso
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Exemplos práticos de como nossa IA pode ser aplicada em diferentes 
                processos da sua operação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-stone-800 border border-stone-700 rounded-xl p-8 hover:bg-stone-750 transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    {useCase.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Resultados Comprovados
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Dados reais de implementações da tecnologia StoneEye em diferentes tipos de operação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-stone-900 border border-stone-800 rounded-xl p-8">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  500+
                </div>
                <div className="text-stone-400">
                  Chapas Classificadas/Hora
                </div>
              </div>
              <div className="text-center bg-stone-900 border border-stone-800 rounded-xl p-8">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  95%
                </div>
                <div className="text-stone-400">
                  Precisão na Classificação
                </div>
              </div>
              <div className="text-center bg-stone-900 border border-stone-800 rounded-xl p-8">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  70%
                </div>
                <div className="text-stone-400">
                  Redução no Tempo
                </div>
              </div>
              <div className="text-center bg-stone-900 border border-stone-800 rounded-xl p-8">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  30%
                </div>
                <div className="text-stone-400">
                  Menos Desperdício
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aplicacoes;
