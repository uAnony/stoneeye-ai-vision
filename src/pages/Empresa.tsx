
import React from 'react';
import Layout from '../components/Layout';
import { Users, Settings, Check, Calendar } from 'lucide-react';

const Empresa = () => {
  const values = [
    {
      title: "Inovação",
      description: "Desenvolvemos tecnologias de ponta para transformar o setor de rochas ornamentais.",
      icon: Settings
    },
    {
      title: "Precisão",
      description: "Nossa IA garante classificação com mais de 95% de precisão, superando métodos tradicionais.",
      icon: Check
    },
    {
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes para alcançar os melhores resultados.",
      icon: Users
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
                  Sobre a
                  <span className="block gradient-text">StoneEye</span>
                </h1>
                <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                  Somos uma empresa de tecnologia especializada em inteligência artificial 
                  para o setor de rochas ornamentais, revolucionando a forma como mármore, 
                  granito e outras pedras são classificadas e processadas.
                </p>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Calendar size={20} />
                  <span>Fundada em 2020</span>
                </div>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Tecnologia StoneEye"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Nossa Missão
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Missão</h3>
                <p className="text-stone-400 leading-relaxed">
                  Revolucionar o setor de rochas ornamentais através de tecnologia de 
                  inteligência artificial, proporcionando maior eficiência, precisão 
                  e sustentabilidade aos nossos clientes.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Visão</h3>
                <p className="text-stone-400 leading-relaxed">
                  Ser a empresa líder global em soluções de IA para classificação 
                  de rochas ornamentais, transformando a indústria através da inovação 
                  tecnológica.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Valores</h3>
                <p className="text-stone-400 leading-relaxed">
                  Inovação constante, precisão técnica, compromisso com a 
                  sustentabilidade e parceria verdadeira com nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Nossos Valores
              </h2>
              <p className="text-xl text-stone-400 max-w-3xl mx-auto">
                Os princípios que guiam nosso trabalho e nossa relação com clientes e parceiros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-stone-900 border border-stone-800 rounded-xl p-8 h-full hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <value.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-stone-200">
                      {value.title}
                    </h3>
                    <p className="text-stone-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
                Nossa História
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">2020 - Fundação</h3>
                    <p className="text-stone-400 leading-relaxed">
                      A StoneEye nasce da visão de aplicar inteligência artificial no setor de 
                      rochas ornamentais, identificando uma oportunidade única de transformar 
                      processos tradicionais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">2021 - Desenvolvimento</h3>
                    <p className="text-stone-400 leading-relaxed">
                      Início do desenvolvimento de nossa IA proprietária, com foco em algoritmos 
                      de visão computacional especializados em características de rochas ornamentais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">2022 - Primeiros Testes</h3>
                    <p className="text-stone-400 leading-relaxed">
                      Implementação dos primeiros testes em ambiente real, alcançando precisão 
                      superior a 90% na classificação automatizada de chapas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">2023 - Lançamento Comercial</h3>
                    <p className="text-stone-400 leading-relaxed">
                      Lançamento oficial da solução StoneEye, com os primeiros clientes 
                      implementando nossa tecnologia e obtendo resultados excepcionais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">2024 - Expansão</h3>
                    <p className="text-stone-400 leading-relaxed">
                      Expansão para novos mercados e desenvolvimento de funcionalidades 
                      avançadas, consolidando nossa posição como líder em IA para rochas ornamentais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Empresa;
