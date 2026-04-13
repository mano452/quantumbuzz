import React from 'react';

const ArticleCard = ({ title, description, badge, date, image }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-full transition-colors p-3">
      {/* Image Container with inner radius */}
      <div className="relative h-[200px] shrink-0 rounded-xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        
        {badge && (
          <span className={`absolute top-3 right-3 bg-white px-2.5 py-1.5 rounded text-[10px] font-medium border ${
            badge === 'Featured' ? 'text-blue-500 border-blue-200' :
            badge === 'Newly Added' ? 'text-blue-500 border-blue-200' :
            'text-[#f9a826] border-[#f9a826]/30'
          }`}>
            {badge === 'Premium' ? (
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 18a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM2.87 9.873a.75.75 0 001.055-.16l3.376-4.502 3.125 6.25a.75.75 0 001.35 0l3.124-6.25 3.376 4.502a.75.75 0 001.205-.904l-4.5-6a.75.75 0 00-1.258-.095L12 6.643 8.243 0.641a.75.75 0 00-1.259.095l-4.5 6a.75.75 0 00.387 1.137z"/>
                </svg>
                {badge}
              </span>
            ) : badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-2 pt-5 pb-3 flex flex-col flex-grow">
        <h3 className="font-medium text-[16px] text-gray-900 mb-3 leading-snug">{title}</h3>
        <p className="text-gray-500 text-[12px] mb-5 flex-grow leading-relaxed pr-2">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <button className="text-[#34d399] font-medium text-[12px] tracking-wide flex items-center gap-1 hover:underline">
            Read more <span>→</span>
          </button>
          <span className="text-gray-400 text-[11px] font-medium flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;