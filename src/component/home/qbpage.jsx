import React, { useRef } from 'react';
import Header from '../header';
import ArticleCard from './article';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const QuantumBuzzPage = () => {
  const swiperRef = useRef();

  const articles = [
    {
      title: "What is a Qubit? A Friendly Primer",
      description: "Visual explanation of qubits, superposition and measurement — no math, just intuition and simple analogies.",
      badge: "Featured",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1000"
    },
    {
      title: "Benchmarking Superconducting Qubits",
      description: "Practical benchmark tests, what metrics matter, and how to interpret vendor performance claims for superconducting.",
      badge: "Newly Added",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000"
    },
    {
      title: "Your First Circuit in Qiskit",
      description: "Visual explanation of qubits, superposition and measurement — no math, just intuition and simple analogies.",
      badge: "Premium",
      date: "2 days ago",
      image: "https://images.unsplash.com/photo-1614729939124-032f0b5610ce?q=80&w=1000"
    },
    {
      title: "The Future of Quantum Cryptography",
      description: "How quantum key distribution promises unhackable communication channels for the future.",
      badge: "Premium",
      date: "3 days ago",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000"
    },
    {
      title: "Understanding Shor's Algorithm",
      description: "A deep dive into how quantum computers can factor large numbers exponentially faster.",
      badge: "Featured",
      date: "4 days ago",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-4 mb-8 md:mb-12">
          <h1 className="text-4xl lg:text-4xl text-md font-bold text-gray-900 leading-[1.5] md:leading-[1.15] mb-8">
            Discover <span className="underline decoration-1 underline-offset-8">Articles</span> / 
            <span className="underline decoration-1 underline-offset-8"> News</span> / 
            <span className="underline decoration-1 underline-offset-8"> Industry Updates</span> / 
            <span className="underline decoration-1 underline-offset-8"> Companies</span> / 
            <br className="hidden lg:block" />
            <span className="underline decoration-1 underline-offset-8"> Products & Services</span> about quantum here!
          </h1>
          <button className="bg-[#C2185B] text-white px-10 py-3 rounded-full font-bold mt-8 text-md hover:bg-[#a0134a] transition-all shadow-lg w-full md:w-auto">
            Start Reading
          </button>
        </section>

        {/* Article Slider Section */}
        <section className="py-4 mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-800 font-bold uppercase tracking-widest text-xs">Explore Latest Articles</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-7 h-7 flex items-center justify-center rounded bg-[#e19eb4] text-[#8f1645] hover:bg-[#c9748b] transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="w-7 h-7 flex items-center justify-center rounded bg-[#ac1c54] text-white shadow-md hover:bg-[#8f1645] transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full pb-4"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index} className="h-auto flex">
                <ArticleCard {...article} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12">
            <button className="bg-[#C2185B] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#a0134a] w-full md:w-auto">
              View more Articles
            </button>
          </div>
        </section>
    </>
  );
};

export default QuantumBuzzPage;