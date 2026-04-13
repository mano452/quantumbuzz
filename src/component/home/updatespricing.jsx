import React from 'react';

const UpdatesAndPricing = () => {
  const updates = [
    { title: "Latest whitepaper from MIT on quantum", date: "10 hours ago", active: true },
    { title: "Statistics on Quantum Investment in USA", date: "11 hours ago", active: false },
    { title: "Research Paper by Dr. Tim and Dr. Suresh", date: "14 hours ago", active: false },
    { title: "Global Quantum Workforce Report 2025", date: "17 hours ago", active: false },
  ];

  return (
    <section className="max-w-full bg-[#fdf5f8]">
      <div className="w-full max-w-8xl mx-auto px-8 md:px-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 md:gap-14 py-10 md:py-10">
        {/* Industry Updates List */}
        <div className="w-full flex flex-col items-start h-full pt-4">
          <h2 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-8">Industry Updates</h2>
          
          <div className="w-full flex flex-col gap-4 flex-grow mb-8">
            {updates.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-xl flex flex-col transition-all shadow-sm ${item.active ? 'bg-[#ac1c54] text-white' : 'bg-white text-gray-800'}`}
              >
                <h4 className={`font-bold text-sm leading-tight mb-2 ${item.active ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                
                <div className="flex items-center gap-1.5 mt-1">
                  <svg className={`w-3.5 h-3.5 ${item.active ? 'text-white/80' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className={`text-[11px] font-medium ${item.active ? 'text-white/90' : 'text-gray-500'}`}>
                    {item.date}
                  </span>
                </div>
                
                <a href="#" className={`text-[10px] font-bold tracking-wide mt-2 flex items-center gap-1 hover:underline w-fit ${item.active ? 'text-white' : 'text-[#34d399]'}`}>
                  View more <span className="text-xs">→</span>
                </a>
              </div>
            ))}
          </div>
          
          <button className="bg-[#ac1c54] text-white px-8 py-3 rounded-full text-xs tracking-wider font-bold shadow-md hover:bg-[#8f1645] transition-all">
            Explore more
          </button>
        </div>

        {/* Premium Card */}
        <div className="bg-[#fffbf2] border border-[#f5d076] rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-md h-fit w-full max-w-lg mx-auto lg:mt-15">
          <div className="w-full flex justify-center mb-6">
            <div className="w-12 h-12 bg-white border border-[#f5d076]/50 rounded-full flex items-center justify-center shadow-sm">
              {/* Custom SVG Crown Icon */}
              <svg className="w-6 h-6 text-[#f9a826]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.25 18a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM2.87 9.873a.75.75 0 001.055-.16l3.376-4.502 3.125 6.25a.75.75 0 001.35 0l3.124-6.25 3.376 4.502a.75.75 0 001.205-.904l-4.5-6a.75.75 0 00-1.258-.095L12 6.643 8.243 0.641a.75.75 0 00-1.259.095l-4.5 6a.75.75 0 00.387 1.137z"/>
                <path d="M4.5 12.75V16.5h15v-3.75a.75.75 0 00-1.5 0v2.25h-12v-2.25a.75.75 0 00-1.5 0z" />
              </svg>
            </div>
          </div>

          <h3 className="font-bold text-[19px] text-center text-gray-900 mb-6 tracking-wide">Become a Premium Member</h3>
          
          <div className="border-t border-gray-200/60 w-full mb-6"></div>

          <div className="flex flex-col items-center justify-center mb-8 text-center w-full">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[44px] leading-none font-bold text-gray-900">5$</span>
              <span className="text-gray-500 text-sm font-medium tracking-wide">Per Month Only</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 tracking-wide font-medium">Your unlimited monthly article access</p>
          </div>

          <button className="w-full bg-[#f9a826] hover:bg-[#e09117] text-white font-bold py-3.5 rounded-full mb-8 transition-colors shadow-lg shadow-orange-200/50 text-sm">
            Upgrade to Premium
          </button>

          <div className="w-full pl-2">
            <h4 className="font-bold text-[18px] text-gray-900 mb-4 tracking-wide">Why Upgrade?</h4>
            <ul className="text-left text-[14px] space-y-3.5 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-[5px] h-[5px] rounded-full bg-[#f9a826] shrink-0"></div>
                <span>Access all member only stories on Quantum Buzzz</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[5px] h-[5px] rounded-full bg-[#f9a826] shrink-0"></div>
                <span>Help build an ad free, independent reading and writing platform</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[5px] h-[5px] rounded-full bg-[#f9a826] shrink-0"></div>
                <span>Support the writers you read most</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-[5px] h-[5px] rounded-full bg-[#f9a826] shrink-0"></div>
                <span>Unlimited article access</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UpdatesAndPricing;