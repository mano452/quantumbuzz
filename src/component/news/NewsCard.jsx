import React from 'react';

const NewsCard = ({ tag, title, description, time, views, comments, source, image }) => {
  return (
    <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Content Side */}
        <div className="flex-1 order-2 md:order-1">
          <div className="text-[#c2185b] text-[10px] font-semibold uppercase tracking-wider mb-3">
            {tag}
          </div>
          <h3 className="text-gray-900 font-semibold text-base md:text-lg mb-3 leading-snug group-hover:text-[#c2185b] transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-[14px] leading-relaxed mb-5 line-clamp-2 md:max-w-xl font-medium">
            {description}
          </p>
          
          <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-gray-50 gap-4">
            <div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                {time}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                {views}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                {comments}
              </span>
              <span className="flex items-center gap-1.5 text-[#34d399] font-semibold">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                {source}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-400 hover:text-[#c2185b] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-[#c2185b] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-48 h-48 md:h-32 rounded-xl overflow-hidden order-1 md:order-2">
          <img 
            src={image || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400"} 
            alt="News Thumbnail" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
