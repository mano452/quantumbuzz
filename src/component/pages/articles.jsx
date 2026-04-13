import React from 'react';
import ListCard from '../articles/ListCard';
import { TrendingTopics, FeaturedAuthors } from '../articles/SidebarWidgets';
import AdSpace from '../home/adspace';

const Articles = () => {
  const articlesData = [
    {
      badges: ['Quantum Physics', 'Latest'],
      title: 'The Future of Quantum Computing: Breaking Through the Noise Barrier',
      description: 'Recent breakthroughs in error correction are bringing us closer to practical quantum computers.',
      authorName: 'Prof. Michael Torres',
      authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
      date: '5 days ago',
      views: '10,502',
      likes: '321',
      comments: '124',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800',
      isPremium: false,
    },
    {
      badges: ['AI & Neural Nets', 'Q-Learning'],
      title: 'Advancements in Neural Networks: Enhancing Machine Learning Models',
      description: 'New techniques in training neural networks are significantly improving performance in image and speech recognition tasks.',
      authorName: 'Dr. James Patel',
      authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      date: '2 days ago',
      views: '10,502',
      likes: '321',
      comments: '124',
      img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800',
      isPremium: false,
    },
    {
      badges: ['Decentralized Web', 'Finance'],
      title: 'Decentralized Finance: The Rise of Smart Contracts',
      description: 'The expansion of DeFi platforms is changing the landscape of financial services and democratizing access.',
      authorName: 'Dr. James Patel',
      authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      date: '2 days ago',
      views: '10,502',
      likes: '321',
      comments: '124',
      img: 'https://images.unsplash.com/photo-1614729939124-032f0b5610ce?q=80&w=800',
      isPremium: true,
    },
    {
      badges: ['Tech & Energy', 'Solar Tech'],
      title: 'Innovations in Solar Panel Efficiency: A Cleaner Future',
      description: 'Research on new materials is leading to solar panels that convert sunlight into energy with higher efficiency rates.',
      authorName: 'Dr. James Patel',
      authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
      date: '2 days ago',
      views: '10,502',
      likes: '321',
      comments: '124',
      img: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=800',
      isPremium: true,
    },
    {
      badges: ['Biotechnology', 'CRISPR'],
      title: 'Gene Editing: The Next Frontier in Medicine',
      description: 'CRISPR technology is paving the way for groundbreaking treatments and potential cures for genetic disorders.',
      authorName: 'Dr. Ethan Walker',
      authorImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      date: '3 days ago',
      views: '10,502',
      likes: '321',
      comments: '124',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
      isPremium: false,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#fefbf6] via-[#fcf5f7] to-[#f4fcf8]">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-100/40 via-red-50/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-8xl mx-auto px-6 md:px-20 py-10 lg:py-16">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-14">
          <h1 className="text-gray-900 font-bold text-lg tracking-widest uppercase mb-6">Articles</h1>
          
          {/* Search Bar */}
          <div className="w-full max-w-xl relative mb-8 border-1 border-[#C2185B] rounded-full ">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </span>
            <input 
              type="text" 
              placeholder="Search Articles/Tags/Authors" 
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-100 rounded-full focus:outline-none focus:border-[#C2185B] focus:ring-1 focus:ring-[#C2185B] text-sm text-gray-700 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-[#c2185b] text-white px-5 py-2 rounded-full text-[14px] font-bold tracking-wide ">All Articles</button>
            <button className="bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-[14px]  tracking-wide  transition-colors">Latest</button>
            <button className="bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-[14px]  tracking-wide  transition-colors">Trending Now</button>
            <button className="bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 px-5 py-2 rounded-full text-[14px]  tracking-wide  transition-colors">Most Reads</button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[68%_1fr] gap-10">
          
          {/* Left Column: Feed */}
          <div className="flex flex-col">
            {articlesData.slice(0, 4).map((article, idx) => (
              <ListCard key={idx} {...article} />
            ))}

            {/* Inline AdSpace */}
              <AdSpace />

            {/* Continue Feed */}
            {articlesData.slice(4).map((article, idx) => (
              <ListCard key={`post-${idx}`} {...article} />
            ))}

            <div className="w-full flex justify-center mt-6">
              <button className="text-[#34d399] border-2 border-[#34d399] rounded-full px-8 py-2.5 text-xs font-bold tracking-wide hover:bg-[#34d399] hover:text-white transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="flex flex-col">
            <TrendingTopics />
            <FeaturedAuthors />
            
            {/* Square AdSpace */}
            <div className="bg-[#fbf5fc] border border-dashed border-[#b666d2] rounded-xl py-14 flex flex-col items-center justify-center text-[#b666d2] mb-6">
               <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
               <span className="text-[10px] font-bold tracking-wide">This is the Ad space</span>
            </div>

            {/* Premium Card embedded */}
            <div className="bg-[#fffbf2] border border-[#f5d076] rounded-2xl p-8 flex flex-col items-center shadow-sm w-full relative overflow-hidden">
               {/* Faint crown background watermark */}
               <svg className="absolute w-32 h-32 text-[#f9a826] opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 18a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM2.87 9.873a.75.75 0 001.055-.16l3.376-4.502 3.125 6.25a.75.75 0 001.35 0l3.124-6.25 3.376 4.502a.75.75 0 001.205-.904l-4.5-6a.75.75 0 00-1.258-.095L12 6.643 8.243 0.641a.75.75 0 00-1.259.095l-4.5 6a.75.75 0 00.387 1.137z"/>
                </svg>

               <div className="w-10 h-10 bg-white border border-[#f5d076]/50 rounded-full flex items-center justify-center shadow-sm mb-4 relative z-10">
                 <svg className="w-5 h-5 text-[#f9a826]" viewBox="0 0 24 24" fill="currentColor"><path d="M2.25 18a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25zM2.87 9.873a.75.75 0 001.055-.16l3.376-4.502 3.125 6.25a.75.75 0 001.35 0l3.124-6.25 3.376 4.502a.75.75 0 001.205-.904l-4.5-6a.75.75 0 00-1.258-.095L12 6.643 8.243 0.641a.75.75 0 00-1.259.095l-4.5 6a.75.75 0 00.387 1.137z"/></svg>
               </div>
               
               <h3 className="font-bold text-[17px] text-center text-gray-900 mb-5 tracking-wide relative z-10 w-3/4">Become a Premium Member</h3>
               
               <div className="border-t border-gray-200/80 w-full mb-5 relative z-10"></div>
               
               <div className="flex flex-col items-center justify-center mb-6 text-center w-full relative z-10">
                 <div className="flex items-center gap-2 mb-1">
                   <span className="text-3xl leading-none font-bold text-gray-900">5$</span>
                   <span className="text-gray-500 text-[11px] font-medium tracking-wide">Per Month Only</span>
                 </div>
                 <p className="text-[9px] text-gray-400 mt-1 tracking-wide font-medium">Your unlimited monthly article access</p>
               </div>
               
               <button className="w-full bg-[#f9a826] hover:bg-[#e09117] text-white font-bold py-3 rounded-full mb-6 transition-colors shadow-lg shadow-orange-200/50 text-xs relative z-10">
                 Upgrade to Premium
               </button>
               
               <div className="w-full px-2 relative z-10">
                 <h4 className="font-bold text-[18px] text-gray-900 mb-3 tracking-wide text-center">Why Upgrade?</h4>
                 <ul className="text-left text-[14px] space-y-3 text-gray-600 font-medium list-disc pl-3">
                   <li>Access all member only stories on Quantum Buzzz</li>
                   <li>Help build an ad free, independent reading and writing platform</li>
                   <li>Support the writers you read most</li>
                   <li>Unlimited article access</li>
                 </ul>
               </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
