import React from "react";
import QuantumBuzzPage from "../home/qbpage";
import News from "../home/news";
import Spotlight from "../home/spotlight";
import AdSpace from "../home/adspace";
import UpdatesAndPricing from "../home/updatespricing";


const Home = () => {
    return (
        <div className="min-h-screen bg-[#FFF9FB]">
            <main className="max-w-8xl mx-auto px-8 md:px-20 py-12 lg:py-16">
                <QuantumBuzzPage />
                <News />
                <AdSpace />
                
            </main>
            <UpdatesAndPricing />
                <Spotlight />
             
        </div>
    );
};

export default Home;    