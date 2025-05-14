import React from 'react';
import { Salad, Instagram, Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Salad className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">Bruno Fagundes</span>
              </div>
              <p className="text-gray-400 mb-4">
                Nutricionista especializado em emagrecimento e nutrição esportiva em Curitiba.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://facebook.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contato@brunonutricionista.com.br" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/5541988034931" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#serviços" className="text-gray-400 hover:text-white transition-colors">Emagrecimento</a></li>
                <li><a href="#serviços" className="text-gray-400 hover:text-white transition-colors">Nutrição Esportiva</a></li>
                <li><a href="#serviços" className="text-gray-400 hover:text-white transition-colors">Reeducação Alimentar</a></li>
                <li><a href="#serviços" className="text-gray-400 hover:text-white transition-colors">Consultoria de Compras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#início" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#resultados" className="text-gray-400 hover:text-white transition-colors">Resultados</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <address className="not-italic text-gray-400">
                <p className="mb-2">Avenida Anitta Garibaldi, 2565</p>
                <p className="mb-2">Bairro São Lourenço</p>
                <p className="mb-2">Curitiba - PR, 80540-180</p>
                <p className="mb-2">Tel: (41) 98803-4931</p>
                <p>Email: contato@brunonutricionista.com.br</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Bruno Fagundes Nutrição. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;