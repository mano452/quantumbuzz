import React from 'react';

const NewsCard = ({ image, title, category, date }) => (
  <div className="relative group rounded-xl overflow-hidden h-64 shadow-lg">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-end">
      <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
        <span className="bg-[#C2185B] w-2 h-2 rounded-full"></span>
        {category}
      </div>
      <h3 className="text-white font-bold leading-snug mb-3 line-clamp-2">{title}</h3>
      <div className="flex justify-between items-center text-[10px] text-gray-400">
        <span className="hover:text-white cursor-pointer">Read more →</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

export default NewsCard;