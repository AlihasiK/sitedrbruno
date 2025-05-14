import React from 'react';
import { Weight, Activity, ShoppingBasket, Utensils, MessageCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Weight className="h-12 w-12 text-primary" />,
      title: "Emagrecimento Saudável",
      description: "Planos alimentares personalizados para emagrecimento sustentável, sem dietas restritivas ou efeito sanfona.",
      features: ["Análise de composição corporal", "Plano alimentar personalizado", "Reeducação alimentar", "Acompanhamento contínuo"],
    },
    {
      icon: <Activity className="h-12 w-12 text-primary" />,
      title: "Nutrição Esportiva",
      description: "Estratégias nutricionais para maximizar seu desempenho físico, ganho de massa muscular e recuperação pós-treino.",
      features: ["Avaliação de necessidades energéticas", "Periodização nutricional", "Suplementação estratégica", "Hidratação adequada"],
    },
    {
      icon: <ShoppingBasket className="h-12 w-12 text-primary" />,
      title: "Consultoria de Compras",
      description: "Aprenda a escolher alimentos saudáveis no supermercado, ler rótulos e montar uma despensa nutritiva.",
      features: ["Lista de compras personalizada", "Interpretação de rótulos", "Substituições inteligentes", "Economia na alimentação saudável"],
    },
    {
      icon: <Utensils className="h-12 w-12 text-primary" />,
      title: "Reeducação Alimentar",
      description: "Desenvolva uma relação saudável com a comida e aprenda hábitos alimentares sustentáveis para toda a vida.",
      features: ["Identificação de gatilhos alimentares", "Mindful eating", "Plano alimentar flexível", "Estratégias para ocasiões especiais"],
    },
  ];

  return (
    <section id="serviços" className="section">
      <div className="container-custom">
        <h2 className="section-title fade-in">Serviços</h2>
        <p className="section-subtitle fade-in">
          Conheça as soluções nutricionais personalizadas que ofereço para ajudar você a alcançar seus objetivos de saúde e bem-estar.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg fade-in">
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <a 
                  href="https://wa.me/5541988034931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Consulta
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5541988034931"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Services;