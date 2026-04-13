import React from 'react';

const SidebarCard = ({ title, views, image }) => (
  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 group cursor-pointer shadow-sm">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
    <div className="absolute bottom-3 left-3 right-3 text-white">
      <h4 className="text-[12px] font-semibold leading-tight mb-1 line-clamp-2">{title}</h4>
      <div className="flex items-center justify-between text-[10px] text-gray-300">
        <span className="flex items-center gap-1 font-semibold text-[#34d399]">Read more →</span>
        <span>{views} views</span>
      </div>
    </div>
  </div>
);

const NewsSidebar = () => {
  const trendingTopics = [
    { title: "Quantum Computing", count: "10,502 views" },
    { title: "Funding & Investments", count: "150 articles" },
    { title: "Quantum-Hardware", count: "321 articles" },
    { title: "Security & Cryptography", count: "124 articles" },
    { title: "Quantum Chemistry & Materials", count: "502 articles" },
  ];

  const sidebarNews = [
    { title: "Quantum startup announces new mass partnership", views: "2 hours ago", image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=400" },
    { title: "New standards proposed for laser performance mounting", views: "1 hour ago", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400" },
    { title: "Inside the world's almost decentralized computing software systems", views: "3 hours ago", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400" },
    { title: "Major conference shows quantum industry showcase", views: "5 hours ago", image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=400" },
    { title: "Analysts independent SW player for electronic devices", views: "2 hours ago", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400" },
  ];

  const AdBox = () => (
    <div className="bg-[#fbf5fc] border border-dashed border-[#b666d2] rounded-xl py-14 flex flex-col items-center justify-center text-[#b666d2] mb-6">
      <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
      <span className="text-[10px] font-semibold tracking-wide uppercase">This is the Hub Space</span>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Trending Topics */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-pink-50 rounded-lg flex items-center justify-center text-[#c2185b]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
          </div>
          <h3 className="font-semibold text-[15px] text-gray-900">Trending Topics/Tags</h3>
        </div>
        <div className="space-y-4">
          {trendingTopics.map((topic, i) => (
            <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0">
              <div>
                <h4 className="text-[13px] font-semibold text-gray-800 group-hover:text-[#c2185b] transition-colors">{topic.title}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{topic.count}</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[#c2185b] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar News Cards */}
      {sidebarNews.slice(0, 2).map((news, i) => (
        <SidebarCard key={i} {...news} />
      ))}

      {/* Ad Box */}
      <AdBox />

      {/* More Sidebar News */}
      {sidebarNews.slice(2).map((news, i) => (
        <SidebarCard key={i} {...news} />
      ))}

      {/* Final Ad Box */}
      <AdBox />
    </div>
  );
};

export default NewsSidebar;
