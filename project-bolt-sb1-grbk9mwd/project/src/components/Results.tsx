import React, { useState } from 'react';

const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState('emagrecimento');
  
  const results = {
    emagrecimento: [
      {
        before: "/images/antesmulher.jpg",
        after: "/images/depoismulher.png",
        name: "Ana C.",
        age: 32,
        duration: "6 meses",
        results: "-18kg e redução de 12% de gordura corporal",
        testimonial: "O acompanhamento com o Bruno mudou minha vida. Consegui emagrecer sem passar fome e aprendi a me alimentar melhor."
      },
      {
        before: "/images/anteshomem.png",
        after: "/images/depoishomem.png",
        name: "Marcos S.",
        age: 41,
        duration: "8 meses",
        results: "-22kg e melhora significativa nos exames de saúde",
        testimonial: "O método do Bruno é diferente de tudo que já tentei antes. Consegui emagrecer e manter o peso."
      },
    ],
    esportiva: [
      {
        before: "/images/anteshff.jpg",
        after: "/images/depoishf.jpg",
        name: "Rodrigo M.",
        age: 28,
        duration: "10 meses",
        results: "+8kg de massa muscular e melhora no desempenho esportivo",
        testimonial: "Com o acompanhamento do Bruno, consegui melhorar meu rendimento nos treinos e competições de crossfit."
      },
      {
        before: "/images/antesmff.jpg",
        after: "/images/deposmf.jpg",
        name: "Juliana R.",
        age: 30,
        duration: "6 meses",
        results: "Melhora na definição muscular e recuperação pós-treino",
        testimonial: "A nutrição esportiva do Bruno me ajudou a ter mais energia durante os treinos e melhorar minha recuperação."
      },
    ]
  };

  return (
    <section id="resultados" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title fade-in">Resultados Reais</h2>
        <p className="section-subtitle fade-in">
          Conheça algumas das transformações que alcançamos juntos. Cada resultado reflete dedicação, ciência e acompanhamento personalizado.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10 fade-in">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'emagrecimento'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('emagrecimento')}
            >
              Emagrecimento
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'esportiva'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('esportiva')}
            >
              Nutrição Esportiva
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {results[activeTab as keyof typeof results].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden fade-in">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  <div className="aspect-[3/4]">
                    <img 
                      src={item.before} 
                      alt={`Antes - ${item.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Antes
                  </div>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="aspect-[3/4]">
                    <img 
                      src={item.after} 
                      alt={`Depois - ${item.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">
                    Depois
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{item.name}, {item.age} anos</h3>
                  <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {item.duration}
                  </span>
                </div>
                <p className="text-primary font-semibold mb-2">{item.results}</p>
                <p className="text-gray-600 italic">"{item.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <a href="#contato" className="btn btn-primary">
            Quero Resultados Como Esses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;