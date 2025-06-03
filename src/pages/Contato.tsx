
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Mail, Users, Settings, ChevronRight } from 'lucide-react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    tipo: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const contactInfo = [
    {
      title: "E-mail Comercial",
      content: "comercial@stoneeye.com.br",
      description: "Para consultas comerciais e demonstrações",
      icon: Mail
    },
    {
      title: "Suporte Técnico", 
      content: "suporte@stoneeye.com.br",
      description: "Suporte técnico e dúvidas sobre implementação",
      icon: Settings
    },
    {
      title: "Parcerias",
      content: "parcerias@stoneeye.com.br", 
      description: "Oportunidades de parceria e integração",
      icon: Users
    }
  ];

  const offices = [
    {
      city: "São Paulo - SP",
      address: "Rua das Tecnologias, 123\nVila Olímpia, São Paulo - SP\nCEP: 04551-000",
      phone: "+55 (11) 9999-8888"
    },
    {
      city: "Vitória - ES", 
      address: "Av. das Rochas, 456\nPraia do Canto, Vitória - ES\nCEP: 29055-000",
      phone: "+55 (27) 9999-7777"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-padding">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Entre em
              <span className="block gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
              Está pronto para revolucionar sua operação com nossa tecnologia de IA? 
              Entre em contato conosco e descubra como podemos ajudar sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-6">
                  Solicite uma Demonstração
                </h2>
                <p className="text-stone-400 mb-8 leading-relaxed">
                  Preencha o formulário abaixo e nossa equipe entrará em contato 
                  para agendar uma demonstração personalizada da tecnologia StoneEye.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-stone-300 font-medium mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-stone-300 font-medium mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="empresa" className="block text-stone-300 font-medium mb-2">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className="block text-stone-300 font-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tipo" className="block text-stone-300 font-medium mb-2">
                      Tipo de Empresa *
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-stone-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="marmoraria">Marmoraria</option>
                      <option value="beneficiadora">Beneficiadora</option>
                      <option value="exportadora">Exportadora</option>
                      <option value="distribuidor">Distribuidor</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-stone-300 font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Conte-nos mais sobre sua empresa e suas necessidades..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensagem</span>
                    <ChevronRight size={20} />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-stone-200 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-blue-400 font-medium mb-2">
                            {info.content}
                          </p>
                          <p className="text-stone-400 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-poppins font-bold mb-6">
                  Nossos Escritórios
                </h3>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-stone-900 border border-stone-800 rounded-xl p-6">
                      <h4 className="text-xl font-semibold text-blue-400 mb-3">
                        {office.city}
                      </h4>
                      <div className="text-stone-400 mb-3 whitespace-pre-line">
                        {office.address}
                      </div>
                      <div className="text-stone-300">
                        <strong>Telefone:</strong> {office.phone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white">
              Pronto para começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a implementar a tecnologia 
              StoneEye e revolucionar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:comercial@stoneeye.com.br"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Mail size={20} />
                <span>Enviar E-mail</span>
              </a>
              <a
                href="tel:+5511999998888"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
              >
                <Users size={20} />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
