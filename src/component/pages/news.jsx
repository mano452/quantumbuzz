import React from 'react';
import NewsHeader from '../news/NewsHeader';
import FeaturedArticle from '../news/FeaturedArticle';
import NewsCard from '../news/NewsCard';
import NewsSidebar from '../news/NewsSidebar';
import AdSpace from '../home/adspace';

const News = () => {
  const newsList = [
    {
      tag: "Quantum Computing",
      title: "arXiv preprint: noise-aware VQE shows improved resilience",
      description: "Recent breakthroughs in error correction are bringing us closer to practical quantum computers that could revolutionize cryptography.",
      time: "1 day ago",
      views: "10,502",
      comments: "147",
      source: "Nature",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400"
    },
    {
      tag: "Funding & Investment",
      title: "TechCrunch: New wave of AI startups secure record funding",
      description: "Emerging AI technologies are attracting significant venture capital, signaling a robust growth period in the tech sector.",
      time: "2 days ago",
      views: "85,210",
      comments: "250",
      source: "TechCrunch",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400"
    },
    {
      tag: "Health & Biotech",
      title: "Bloomberg: Health tech startups thrive amidst pandemic recovery",
      description: "Innovations in telehealth and digital health records are driving significant investment in healthcare technology.",
      time: "4 days ago",
      views: "54,321",
      comments: "182",
      source: "Bloomberg",
      image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?q=80&w=400"
    },
    {
      tag: "Hardware & Physics",
      title: "Science: Breakthrough in silicon-based quantum processors",
      description: "Researchers have achieved a record fidelity for two-qubit gates in silicon, a major step toward scalable quantum computing.",
      time: "1 week ago",
      views: "12,175",
      comments: "84",
      source: "Science",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400"
    },
    {
      tag: "Environment",
      title: "Reuters: Sustainable energy firms gain traction in investment circles",
      description: "Investors are increasingly focusing on green technologies as climate change initiatives take priority.",
      time: "1 week ago",
      views: "32,910",
      comments: "156",
      source: "Reuters",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#fefbf6] via-[#fcf5f7] to-[#f4fcf8] pb-20">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-pink-100/40 via-red-50/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-8xl mx-auto px-6 md:px-20 py-10 lg:py-16">
        <NewsHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-[68%_1fr] gap-10">
          {/* Main Content */}
          <div className="flex flex-col">
            <FeaturedArticle />
            
            <div className="flex flex-col">
              {newsList.slice(0, 2).map((item, index) => (
                <NewsCard key={index} {...item} />
              ))}
              
              {/* Inline AdSpace */}
              <div className="my-4">
                <AdSpace />
              </div>
              
              {newsList.slice(2).map((item, index) => (
                <NewsCard key={index + 2} {...item} />
              ))}
            </div>

            <div className="w-full flex justify-center mt-10">
              <button className="text-[#34d399] border-2 border-[#34d399] rounded-full px-10 py-3 text-[13px] font-bold tracking-wide hover:bg-[#34d399] hover:text-white transition-all shadow-lg shadow-emerald-50">
                Load More News
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <NewsSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default News;
