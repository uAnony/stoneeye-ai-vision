
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Calendar, Contact } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="section-padding py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-poppins font-bold gradient-text">
                  StoneEye
                </span>
              </Link>
              <p className="text-stone-400 mb-6 max-w-md">
                Revolucionando o setor de rochas ornamentais com inteligência artificial de ponta. 
                Classificação automatizada, precisão garantida.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:contato@stoneeye.com.br"
                  className="text-stone-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-stone-200 font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <Link to="/empresa" className="block text-stone-400 hover:text-blue-400 transition-colors duration-200">
                  Empresa
                </Link>
                <Link to="/tecnologia" className="block text-stone-400 hover:text-blue-400 transition-colors duration-200">
                  Tecnologia
                </Link>
                <Link to="/aplicacoes" className="block text-stone-400 hover:text-blue-400 transition-colors duration-200">
                  Aplicações
                </Link>
                <Link to="/sustentabilidade" className="block text-stone-400 hover:text-blue-400 transition-colors duration-200">
                  Sustentabilidade
                </Link>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-stone-200 font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-blue-400" />
                  <span className="text-stone-400">contato@stoneeye.com.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Contact size={16} className="text-blue-400" />
                  <span className="text-stone-400">+55 (XX) XXXX-XXXX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm mb-4 md:mb-0">
              © 2024 StoneEye. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacidade" className="text-stone-500 hover:text-blue-400 transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-stone-500 hover:text-blue-400 transition-colors duration-200">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
