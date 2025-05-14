import React from 'react';
import { Microscope, FileHeart, ArrowRightLeft, Repeat } from 'lucide-react';

const Approach: React.FC = () => {
  const steps = [
    {
      icon: <Microscope className="h-12 w-12 text-primary" />,
      title: "Avaliação Completa",
      description: "Iniciamos com uma análise detalhada da sua saúde atual, histórico, hábitos alimentares e objetivos para entender suas necessidades específicas."
    },
    {
      icon: <FileHeart className="h-12 w-12 text-primary" />,
      title: "Plano Personalizado",
      description: "Desenvolvo um plano alimentar totalmente personalizado com base na sua rotina, preferências e metas, tornando a mudança sustentável."
    },
    {
      icon: <ArrowRightLeft className="h-12 w-12 text-primary" />,
      title: "Acompanhamento Próximo",
      description: "Monitoro seu progresso com consultas regulares, ajustando o plano conforme necessário e oferecendo suporte contínuo para dúvidas."
    },
    {
      icon: <Repeat className="h-12 w-12 text-primary" />,
      title: "Resultados Duradouros",
      description: "Trabalho não apenas para resultados rápidos, mas para criar hábitos saudáveis que você manterá por toda a vida."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-title fade-in">Minha Abordagem</h2>
        <p className="section-subtitle fade-in">
          Conheça meu método de trabalho baseado em ciência, personalização e acompanhamento contínuo.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center fade-in">
              <div className="bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary rounded-xl text-white text-center fade-in">
          <h3 className="text-2xl font-bold mb-4">Dietas da moda não funcionam a longo prazo</h3>
          <p className="text-lg mb-6">
            O segredo para resultados duradouros está na ciência da nutrição aplicada à sua individualidade,
            transformando a maneira como você se relaciona com a comida.
          </p>
          <a href="#contato" className="bg-white text-primary hover:bg-gray-100 transition-colors py-3 px-6 rounded-full font-semibold inline-block">
            Quero uma abordagem personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Approach;