import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Patrícia Silva",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "Depois de tentar várias dietas sem sucesso, o acompanhamento com o Bruno foi revelador. Ele me ensinou a comer de forma saudável sem abrir mão dos alimentos que gosto. Perdi 15kg em 6 meses e, o mais importante, não recuperei o peso.",
      rating: 5,
      location: "Curitiba, PR"
    },
    {
      name: "Henrique Martins",
      photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "Como atleta amador, busquei o Bruno para melhorar meu desempenho nas corridas. O plano nutricional que ele desenvolveu melhorou não só meu rendimento, mas também minha recuperação após os treinos. Conquistei minha melhor marca na maratona!",
      rating: 5,
      location: "São José dos Pinhais, PR"
    },
    {
      name: "Carolina Mendes",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "O diferencial do Bruno é a atenção que ele dá para cada paciente. Ele não apenas prescreve um plano alimentar, mas te ensina sobre nutrição e te acompanha de perto. Meus exames de sangue melhoraram significativamente após 3 meses de acompanhamento.",
      rating: 5,
      location: "Curitiba, PR"
    },
    {
      name: "Ricardo Oliveira",
      photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      testimonial: "Procurei o Bruno para ganho de massa muscular e os resultados superaram minhas expectativas. Ele ajustou minha alimentação respeitando minha rotina corrida e minhas preferências alimentares. Recomendo totalmente!",
      rating: 5,
      location: "Colombo, PR"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: number;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, currentSlide]);

  return (
    <section id="depoimentos" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title fade-in">Depoimentos</h2>
        <p className="section-subtitle fade-in">
          Veja o que dizem as pessoas que transformaram sua saúde com meu acompanhamento nutricional.
        </p>

        <div className="relative max-w-4xl mx-auto fade-in">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-4">
                  <div className="bg-white rounded-xl shadow-md p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={prevSlide}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={nextSlide}
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 fade-in">
          <a href="#contato" className="btn btn-primary">
            Quero Resultados Também
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;