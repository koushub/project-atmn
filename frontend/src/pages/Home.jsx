import React from "react";
import { ArrowRight, ArrowBigRight, Users, Star, ScrollText, BookOpen, CornerRightDown } from "lucide-react";
import EmailPreview from "../components/EmailPreview";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // CHANGE 1: Reduced max-w-7xl to max-w-5xl for a tighter, more readable layout
    // CHANGE 2: Adjusted padding to be more compact

    <>
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          {/* Badge - Made smaller and subtler */}
          <div className="inline-block px-3 py-1 bg-lime-100 border border-orange-100 rounded-full">
            <h2 className="flex items-center gap-2 text-orange-600 font-sans font-bold tracking-widest uppercase text-[10px] md:text-xs">
              <BookOpen size={18} />
              Wisdom of the Self
            </h2>
          </div>

          {/* Heading - Scaled down from 6xl to 5xl/4xl for elegance */}
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-[1.15]">
            Experience the <br className="hidden lg:block" />
            <span className="text-orange-600 italic">Ashtavakra</span> Gita
            Every Morning.
          </h1>

          {/* Subtext - Reduced size and max-width for better readability */}
          <p className="text-base md:text-lg text-gray-600 font-serif leading-relaxed max-w-lg mx-auto lg:mx-0">
            One profound verse on non-duality delivered to your inbox daily.
            Sanskrit text, Hindi meaning, and English translation.
          </p>

          {/* Buttons - Made smaller (px-6 py-3 instead of px-8 py-4) */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <a
              href="#pricing"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer"
            >
              Start Your Journey <ArrowRight size={18} />
            </a>
            <a
              href="#preview"
              className="border border-orange-200 hover:border-orange-300 bg-white text-gray-700 px-6 py-3 rounded-full font-bold transition-all text-sm md:text-base hover:bg-orange-50 cursor-pointer flex items-center justify-center"
            >
              Read Sample <CornerRightDown />
            </a>
            <a
              className={`flex items-center gap-2 cursor-pointer bg-gradient-to-r from-amber-700 to-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-amber-500 hover:to-amber-700 transition duration-300`}
            >
              Read Books
              <ArrowBigRight size={20} />
            </a>
          </div>

          {/* NEW SECTION: Social Proof */}
          <div className="pt-6 border-t border-gray-100 mt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-orange-100 rounded-full text-orange-600">
                <Users size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xs font-bold text-gray-900">500+</span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500">
                  Seekers
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-orange-100 rounded-full text-orange-600">
                <Star size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xs font-bold text-gray-900">4.9/5</span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500">
                  Rating
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <div className="p-1.5 bg-orange-100 rounded-full text-orange-600">
                <ScrollText size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xs font-bold text-gray-900">298+</span>
                {/* Note: Ashtavakra has ~298 verses. If you prefer 700, just change text here */}
                <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500">
                  Shlokas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Image */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end">
          {/* Background blob - scaled down */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

          <img
            src="ashtavakra.jpg"
            alt="Ashtavakra and Janaka"
            /* Scaled to w-3/4 (75%) to look cleaner and less dominant */
            className="w-3/4 lg:w-[85%] relative z-10 h-auto rounded-xl shadow-xl border-[3px] border-white transform lg:rotate-2 transition-transform hover:rotate-0 duration-500"
          />
        </div>
      </div>

      <div id="preview" className="scroll-mt-20">
        <EmailPreview />
      </div>
      <div id="features" className="scroll-mt-20">
        <Features />
      </div>
      <div id="pricing" className="scroll-mt-20">
        <Pricing />
      </div>
      <Footer />
    </>
  );
};

export default Home;
