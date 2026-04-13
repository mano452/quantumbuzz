import React from 'react';

const ListCard = ({ badges, title, description, authorName, authorImg, date, views, likes, comments, img, isPremium }) => {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 mb-6">
      {/* Content Area */}
      <div className="flex-1 flex flex-col order-2 md:order-1">
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {badges.map((badge, idx) => (
            <span key={idx} className="px-2.5 py-1 rounded text-[10px] font-medium tracking-wide bg-[#fdf5f8] text-[#c2185b] border border-[#fdf5f8]">
              {badge}
            </span>
          ))}
        </div>

        {/* Title & Desc */}
        <h3 className="font-bold text-base md:text-lg text-gray-900 leading-tight mb-2">{title}</h3>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-4 line-clamp-2 pr-4">{description}</p>

        {/* Author Line */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 shrink-0">
            {authorImg ? (
              <img src={authorImg} alt={authorName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">?</div>
            )}
          </div>
          <span className="text-gray-700 text-[11px] font-medium flex items-center gap-1">
            {authorName}
            {/* Verified icon */}
            <svg className="w-3 h-3 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </span>
        </div>

        {/* Bottom Actions Row */}
        <div className="flex flex-wrap items-center justify-between mt-auto pt-2">
          {/* Stats */}
          <div className="flex items-center gap-4 text-gray-400 text-[10px] font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              {date}
            </span>
            <span className="flex items-center gap-1 hidden sm:flex">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              {views}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              {likes}
            </span>
            <span className="flex items-center gap-1 hidden sm:flex">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              {comments}
            </span>
          </div>

          {/* Premium Tag & Actions */}
          <div className="flex items-center gap-3">
            {isPremium && (
              <span className="mr-2 px-3 py-1 rounded text-[10px] font-bold tracking-wide border border-[#f9a826] text-[#f9a826] bg-[#fffbf2] flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 18a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM2.87 9.873a.75.75 0 001.055-.16l3.376-4.502 3.125 6.25a.75.75 0 001.35 0l3.124-6.25 3.376 4.502a.75.75 0 001.205-.904l-4.5-6a.75.75 0 00-1.258-.095L12 6.643 8.243 0.641a.75.75 0 00-1.259.095l-4.5 6a.75.75 0 00.387 1.137z"/>
                </svg>
                Premium
              </span>
            )}
            
            <button className="text-gray-400 hover:text-[#c2185b] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg></button>
            <button className="text-gray-400 hover:text-[#c2185b] transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg></button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg></button>
          </div>
        </div>

      </div>

      {/* Image Thumbnail */}
      <div className="w-full md:w-[180px] lg:w-[220px] h-[160px] md:h-auto shrink-0 order-1 md:order-2 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full border border-gray-100 flex items-center justify-center text-gray-300">
            Image
          </div>
        )}
      </div>

    </div>
  );
};

export default ListCard;
