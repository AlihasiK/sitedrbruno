import React from 'react';
import { Medal, Users, Award, BookOpenCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="section bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-primary font-semibold">Sobre mim</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Bruno Fagundes
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Conheça minha história e como posso ajudar você a alcançar mais saúde e bem-estar
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto md:mx-0">
              <img 
                src="/images/dr.bruno.jpg" 
                alt="Bruno Fagundes Nutricionista" 
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
          </div>

          <div className="space-y-10">
            <article className="space-y-6">
              <header>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutricionista Especializado e Apaixonado</h3>
              </header>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Sou Bruno Fagundes, nutricionista graduado pela USP com especialização em Nutrição Esportiva e Emagrecimento. Há mais de 8 anos atuo em Curitiba ajudando pessoas a transformarem seus hábitos alimentares e alcançarem uma vida mais saudável.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Meu método combina a ciência da nutrição com uma abordagem personalizada e humanizada, entendendo que cada corpo é único e cada pessoa tem diferentes necessidades e objetivos.
                </p>
              </div>
            </article>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                <Medal className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Especialista em Nutrição Esportiva</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Formação especializada para atender atletas e praticantes de atividade física</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">+1000 Clientes Atendidos</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Experiência comprovada em transformar vidas através da nutrição</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2 break-words">Pós-graduado em Emagrecimento</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Especialização em estratégias efetivas para perda de peso saudável</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                <BookOpenCheck className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Graduado pela USP</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Formação pela melhor universidade da América Latina</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;