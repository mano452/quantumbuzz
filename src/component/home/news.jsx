import React from 'react';
import NewsCard from './newscard';

const News = () => {
    const newsData = [
        { title: "Quantum Computing Reaches New Milestone in Error Correction", category: "Hardware", date: "Jan 15", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000" },
        { title: "New Algorithm Discovered for Logistics Optimization", category: "Software", date: "Jan 12", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000" },
        { title: "Quantum Startups See Record Funding in Early 2025", category: "Business", date: "Jan 10", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000" }
    ];

    return (
        <section className="py-4 mb-8 md:mb-12">
            <h2 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-8">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news, idx) => (
                    <NewsCard key={idx} {...news} />
                ))}
            </div>
        </section>
    );
};

export default News;
