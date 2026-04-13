import React from 'react';

const NewsHeader = () => {
  const filters = ["All News", "Latest", "Trending Now", "Top Rated"];

  return (
    <div className="mb-8">
      <h1 className="text-gray-900 font-semibold text-lg tracking-widest uppercase mb-6">News</h1>
      
      {/* Search Bar */}
      <div className="w-full max-w-xl relative mb-8 border border-gray-200 rounded-full bg-white shadow-sm overflow-hidden">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="Search News..." 
          className="w-full pl-11 pr-4 py-3 bg-transparent focus:outline-none text-[14px] text-gray-700"
        />
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter, index) => (
          <button 
            key={index}
            className={`px-5 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all ${
              index === 0 
              ? 'bg-[#c2185b] text-white shadow-md shadow-pink-100' 
              : 'bg-white border border-gray-100 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsHeader;
