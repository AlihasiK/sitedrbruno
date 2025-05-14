import React, { useState, useEffect } from 'react';
import { Menu, X, Salad } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Salad className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Bruno Fagundes</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'Depoimentos', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="btn btn-primary py-2 px-4"
            >
              Agendar Consulta
            </a>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['Início', 'Sobre', 'Serviços', 'Resultados', 'Depoimentos', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contato"
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;