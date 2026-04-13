import React from 'react';

const Spotlight = () => {
  return (
    <section className="max-w-8xl mx-auto px-8 md:px-20 py-12 lg:py-10">
      <h2 className="text-gray-800 font-bold uppercase tracking-widest text-xs mb-6">In The Spotlight</h2>
      
      {/* Featured Large Card */}
      <div className="relative rounded-2xl overflow-hidden mb-8 h-[360px] md:h-[400px] group shadow-sm bg-gray-900 border border-gray-200">
        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000" className="w-full h-full object-cover opacity-80" alt="IBM Quantum" />
        
        {/* IBM Logo Mock */}
        <div className="absolute top-6 right-8 text-white font-black text-5xl tracking-widest opacity-90 border-t-2 border-b-2 py-1">IBM</div>

        {/* Top Left Yellow Tag */}
        <div className="absolute top-4 left-4 bg-[#f9a826] text-black px-4 py-1.5 rounded text-[12px]  shadow-md">
          Company In Spotlight for this month
        </div>
        
        {/* Bottom Right Floating Box (Inside Image) */}
        <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white p-6 rounded-xl shadow-2xl w-[90%] md:w-[420px]">
          <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
            <h3 className="font-bold text-[#b81855] text-lg">IBM Quantum</h3>
            <div className="flex items-center gap-1.5 text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-[10px] font-medium tracking-wide">10 hours ago</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-xs mb-5 font-medium leading-relaxed">
            IBM Quantum provides cloud-accessible quantum systems and software tools for research, chemistry and optimization.
          </p>
          
          <a href="#" className="text-[#34d399] text-[14px] tracking-wide flex items-center justify-end gap-1 w-full hover:underline">
            Learn more <span className="text-sm">→</span>
          </a>
        </div>
      </div>

      {/* Grid for small spotlight cards (Asymmetrical 1fr 1.5fr) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
        {[
          { label: "Product In Spotlight for this month", name: "D-Wave", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", desc: "First commercial quantum computer offering annealing systems scaling smoothly for business logistics." },
          { label: "Startup In Spotlight for this month", name: "Quantinuum", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000", desc: "Quantum algorithms breaking barriers bridging algorithm design and proof-of-concept tests for science.Quantum algorithms breaking barriers bridging algorithm design and proof-of-concept tests for science." }
        ].map((item, i) => (
          <div key={i} className="relative rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-[360px] md:h-[400px]">
            
            {/* Image Block */}
            <img src={item.img} className="w-full h-full object-cover opacity-90" alt={item.name} />
            
            {/* Top Left Yellow Tag */}
            <div className="absolute top-4 left-4 bg-[#f9a826] text-black px-3 py-1.5 rounded text-[12px]  shadow-md z-10">
              {item.label}
            </div>

            {/* Text Block (Floating Overlay Below) */}
            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 bg-white p-5 rounded-xl shadow-2xl z-20">
              <div className="flex justify-between items-center mb-3 border-b border-gray-200/60 pb-2">
                <h4 className="font-bold text-[#b81855] text-base">{item.name}</h4>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-[10px] font-medium tracking-wide">14 hours ago</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-600 font-medium leading-relaxed line-clamp-2 mb-4">
                {item.desc}
              </p>
              
              <a href="#" className="text-[#34d399] text-[14px] tracking-wide flex items-center justify-end gap-1 hover:underline">
                Learn more <span className="text-sm">→</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;