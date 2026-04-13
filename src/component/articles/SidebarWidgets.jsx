import React from 'react';

export const TrendingTopics = () => {
  const topics = [
    { name: "Quantum Computing", count: "1,245" },
    { name: "Qubits & superposition", count: "982" },
    { name: "Superconducting", count: "654" },
    { name: "Ai for automation", count: "432" },
    { name: "Ethics & policy", count: "349" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 rounded bg-[#c2185b] flex items-center justify-center text-white shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
        </div>
        <h4 className="font-bold text-gray-900 text-sm">Trending Topics/Tags</h4>
      </div>

      <div className="flex flex-col gap-4">
        {topics.map((topic, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
            <div>
              <div className="text-[14px] font-semibold text-gray-800 group-hover:text-[#c2185b] transition-colors mb-0.5">{topic.name}</div>
              <div className="text-[12px] text-gray-400">{topic.count} articles</div>
            </div>
            <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#c2185b] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FeaturedAuthors = () => {
  const authors = [
    { name: "Dr. Sarah Chen", title: "Quantum Physicist", articles: 112, followers: "14,000", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" },
    { name: "Prof. Michael Thomson", title: "Neuroscientist", articles: 85, followers: "22,500", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
    { name: "Dr. Emily Martinez", title: "Data Ethicist", articles: 74, followers: "11,200", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
    { name: "Dr. James Lee", title: "AI Researcher", articles: 136, followers: "34,000", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
    { name: "Prof. Angela White", title: "Bioethicist", articles: 65, followers: "17,800", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
    { name: "Dr. Samuel Patel", title: "Computer Scientist", articles: 95, followers: "12,900", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 rounded bg-[#c2185b] flex items-center justify-center text-white shrink-0">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
        </div>
        <h4 className="font-bold text-gray-900 text-sm">Featured Authors</h4>
      </div>

      <div className="flex flex-col gap-5">
        {authors.map((author, i) => (
          <div key={i} className="flex gap-3 items-start">
            <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover shrink-0 bg-gray-100" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1 mb-0.5">
                <h5 className="text-[12px] font-bold text-gray-900 truncate">{author.name}</h5>
                <svg className="w-3 h-3 text-teal-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-[12px] text-gray-500 mb-1">{author.title}</p>
              <div className="text-[12px] font-medium text-gray-400">
                {author.articles} articles · {author.followers} followers
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
