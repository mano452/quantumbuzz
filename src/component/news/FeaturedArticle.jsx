import React from 'react';

const FeaturedArticle = () => {
  return (
    <div className="relative w-full aspect-[21/9] md:aspect-[24/10] overflow-hidden rounded-3xl shadow-xl group mb-8">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200" 
        alt="Featured Story" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Tag */}
      <div className="absolute top-4 right-4 bg-[#c2185b] text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest bg-opacity-90 backdrop-blur-sm">
        Featured News
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
        <h2 className="text-white text-xl md:text-3xl font-semibold mb-4 line-clamp-2 md:max-w-3xl leading-tight">
          Startup X raises $50M to scale trapped-ion systems for commercial quantum advantage.
        </h2>
        
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 text-[#34d399] font-semibold text-sm hover:underline transition-all">
            Read more 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          
          <div className="text-gray-300 text-[11px] font-medium flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            2 hours ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
