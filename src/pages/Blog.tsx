
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Users, ChevronRight } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "O Futuro da Classificação de Rochas: Como a IA Está Revolucionando o Setor",
    excerpt: "Descubra como a inteligência artificial está transformando a forma como classificamos e processamos rochas ornamentais, trazendo precisão e eficiência sem precedentes.",
    date: "15 de Dezembro, 2024",
    author: "Equipe StoneEye",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    readTime: "8 min de leitura"
  };

  const posts = [
    {
      title: "5 Benefícios da Automatização na Classificação de Mármore",
      excerpt: "Conheça as principais vantagens de implementar sistemas automatizados em sua operação de classificação de mármore.",
      date: "10 de Dezembro, 2024",
      author: "Dr. Marina Silva",
      category: "Indústria",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min de leitura"
    },
    {
      title: "Sustentabilidade no Setor de Rochas Ornamentais",
      excerpt: "Como a tecnologia pode contribuir para práticas mais sustentáveis na extração e processamento de rochas.",
      date: "5 de Dezembro, 2024", 
      author: "Eng. Carlos Mendes",
      category: "Sustentabilidade",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "6 min de leitura"
    },
    {
      title: "Case de Sucesso: Marmoraria Aumenta Produtividade em 200%",
      excerpt: "Veja como uma marmoraria local transformou sua operação com a implementação da tecnologia StoneEye.",
      date: "28 de Novembro, 2024",
      author: "Equipe StoneEye",
      category: "Case de Sucesso",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "7 min de leitura"
    },
    {
      title: "Tendências Tecnológicas para 2025 no Setor de Rochas",
      excerpt: "As principais inovações e tendências que devem marcar o setor de rochas ornamentais no próximo ano.",
      date: "20 de Novembro, 2024",
      author: "Prof. Ana Rodrigues",
      category: "Tendências",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "9 min de leitura"
    },
    {
      title: "Como Reduzir Desperdício com Classificação Inteligente",
      excerpt: "Estratégias e tecnologias para minimizar o desperdício de material na classificação de rochas ornamentais.",
      date: "15 de Novembro, 2024",
      author: "Eng. Roberto Lima",
      category: "Eficiência",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "4 min de leitura"
    },
    {
      title: "Integração de IA em Sistemas de Gestão Existentes",
      excerpt: "Guia completo para integrar soluções de inteligência artificial aos seus sistemas de gestão atuais.",
      date: "8 de Novembro, 2024",
      author: "Tech Team StoneEye",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "10 min de leitura"
    }
  ];

  const categories = ["Todos", "Tecnologia", "Indústria", "Sustentabilidade", "Case de Sucesso", "Tendências", "Eficiência"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="section-padding">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              Blog
              <span className="block gradient-text">StoneEye</span>
            </h1>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
              Insights, tendências e inovações no setor de rochas ornamentais. 
              Acompanhe as últimas novidades em tecnologia e inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Destaque
                </div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-stone-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <span>Ler Artigo</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
              <div>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-10 bg-stone-900">
        <div className="section-padding">
          <div className="container-max">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index} className="group">
                  <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden hover:bg-stone-800 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-stone-200 line-clamp-2 group-hover:text-blue-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-stone-400 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-stone-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-stone-800">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users size={14} className="text-stone-500" />
                            <span className="text-sm text-stone-500">{post.author}</span>
                          </div>
                          <Link 
                            to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-blue-400 hover:text-blue-300 font-medium text-sm inline-flex items-center space-x-1 transition-colors duration-200"
                          >
                            <span>Ler mais</span>
                            <ChevronRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="section-padding">
          <div className="container-max text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white">
              Fique Por Dentro
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Assine nossa newsletter e receba as últimas novidades sobre 
              tecnologia e inovação no setor de rochas ornamentais.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Assinar
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
