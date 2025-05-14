import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom max-w-5xl">
        <h2 className="section-title fade-in">Entre em Contato</h2>
        <p className="section-subtitle fade-in">
          Pronto para transformar sua saúde? Entre em contato hoje mesmo e agende sua consulta.
        </p>

        <div className="space-y-6">
          {/* WhatsApp CTA Card */}
          <div className="bg-primary rounded-2xl p-6 sm:p-8 text-white text-center fade-in">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Agende sua Consulta</h3>
            <p className="mb-6 text-base sm:text-lg opacity-90">
              Entre em contato via WhatsApp e comece sua jornada para uma vida mais saudável.
            </p>
            <a 
              href="https://wa.me/5541988034931"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors text-base sm:text-lg w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Agendar Consulta
            </a>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 fade-in">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0"> {/* Added min-w-0 to enable text wrapping */}
                <h4 className="font-semibold text-lg mb-1">Localização</h4>
                <address className="text-gray-600 not-italic">
                  <p>Avenida Anitta Garibaldi, 2565</p>
                  <p>Bairro São Lourenço, Curitiba - PR</p>
                  <p>CEP: 80540-180</p>
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0"> {/* Added min-w-0 to enable text wrapping */}
                <h4 className="font-semibold text-lg mb-1">Telefone</h4>
                <a 
                  href="tel:+5541988034931" 
                  className="text-gray-600 hover:text-primary transition-colors break-all"
                >
                  (41) 98803-4931
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0"> {/* Added min-w-0 to enable text wrapping */}
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <a 
                  href="mailto:contato@brunonutricionista.com.br" 
                  className="text-gray-600 hover:text-primary transition-colors break-all"
                >
                  contato@brunonutricionista.com.br
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="min-w-0"> {/* Added min-w-0 to enable text wrapping */}
                <h4 className="font-semibold text-lg mb-1">Horário de Atendimento</h4>
                <div className="text-gray-600">
                  <p>Segunda a Sexta: 8h às 19h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 fade-in">
            <a 
              href="https://wa.me/5541988034931" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 px-4 py-3 rounded-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 px-4 py-3 rounded-xl transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">Instagram</span>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 px-4 py-3 rounded-xl transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Facebook</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 px-4 py-3 rounded-xl transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="mailto:contato@brunonutricionista.com.br" 
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-600 px-4 py-3 rounded-xl transition-all duration-300 col-span-2 sm:col-span-1"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;