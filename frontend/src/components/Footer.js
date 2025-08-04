import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-200 mb-4">Therian</h3>
            <p className="text-blue-100 leading-relaxed">
              A melhor loja de fantasias de animais do Brasil. Qualidade, conforto e diversão em cada produto.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 p-2 bg-blue-700 rounded-full hover:bg-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 p-2 bg-blue-700 rounded-full hover:bg-blue-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 p-2 bg-blue-700 rounded-full hover:bg-blue-600">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200 mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo?categoria=felinos" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Felinos
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=caninos" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Caninos
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=ursos" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Ursos
                </Link>
              </li>
              <li>
                <Link to="/catalogo?categoria=roedores" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Roedores
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200 mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/favoritos" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Favoritos
                </Link>
              </li>
              <li>
                <Link to="/carrinho" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Carrinho
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-200" />
                <span className="text-blue-100">contato@therian.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-200" />
                <span className="text-blue-100">(11) 9999-9999</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-200 mt-1" />
                <span className="text-blue-100">São Paulo, SP<br />Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2024 Therian. Todos os direitos reservados.
            </p>
            <div className="flex flex-col items-center space-y-1">
              <p className="text-blue-100 text-sm font-medium">
                Desenvolvido por Frontend no Celular (Alírio Neto)
              </p>
              <p className="text-blue-300 text-xs">
                Este é um projeto de exemplo para demonstração
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;