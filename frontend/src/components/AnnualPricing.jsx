import React from 'react';
import { Check, BookOpen, Heart, Globe, Sparkles } from 'lucide-react';

const AnnualPricing = () => {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-orange-600 font-sans font-bold tracking-widest uppercase text-xs">
            Join the Sangha
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
            Choose your Path to <span className="italic text-orange-600">Self-Realization</span>
          </h3>
        </div>

        {/* The Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: The Seeker (Free) */}
          <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] hover:border-orange-200">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-gray-200 transition-colors rounded-t-2xl"></div>
            <h4 className="font-serif text-2xl text-gray-900 font-bold mb-2">Seeker</h4>
            <div className="text-4xl font-sans font-bold text-gray-300 mb-6">Free</div>
            
            <p className="text-gray-500 text-sm mb-8 min-h-[40px]">
              Perfect for starting your daily habit of contemplation.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>1 Shloka delivered daily</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Sanskrit, Hindi & English</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Access to past 10 emails</span>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-600 font-bold text-sm transition-colors group-hover:border-orange-600 group-hover:text-orange-600">
              Subscribe Free
            </button>
          </div>

          {/* Card 2: The Initiate (Complete Book) - MAIN FOCUS */}
          <div className="group relative bg-[#FFFCF5] p-8 rounded-2xl border-2 border-orange-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] hover:border-orange-300 scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-md">
              Most Popular
            </div>
            
            <h4 className="font-serif text-2xl text-gray-900 font-bold mb-2">The Complete Collection</h4>
            <div className="text-4xl font-sans font-bold text-orange-600 mb-6">$15 <span className="text-lg text-gray-400 font-normal">/ lifetime</span></div>
            
            <p className="text-gray-600 text-sm mb-8 min-h-[40px]">
              Own the entire scripture. Read offline, anywhere, anytime.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                <BookOpen className="w-5 h-5 text-orange-600 shrink-0" />
                <span>All 20 Chapters (298+ Verses)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-800">
                <Check className="w-5 h-5 text-orange-600 shrink-0" />
                <span>High-Quality PDF & E-Pub</span>
              </li>
              
              {/* THE REQUESTED LANGUAGE FEATURE */}
              <li className="flex items-start gap-3 text-sm text-gray-800 bg-orange-100/50 p-2 rounded-lg -ml-2">
                <Globe className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                    <span className="font-bold block text-orange-800">Native Script Support</span>
                    <span className="text-xs text-orange-700 leading-tight">
                        Get an additional edition in: <br/>
                        Punjabi, Malayalam, Telugu, Tamil, or Marathi.
                    </span>
                </div>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm shadow-lg hover:shadow-orange-500/25 transition-all">
              Get the Complete Book
            </button>
          </div>

          {/* Card 3: The Patron (Support) */}
          <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] hover:border-orange-200">
             <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-gray-200 transition-colors rounded-t-2xl"></div>
            <h4 className="font-serif text-2xl text-gray-900 font-bold mb-2">Patron</h4>
            <div className="text-4xl font-sans font-bold text-gray-300 mb-6">$50+</div>
            
            <p className="text-gray-500 text-sm mb-8 min-h-[40px]">
              Help us keep this wisdom free for seekers around the world.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Heart className="w-5 h-5 text-red-400 shrink-0" />
                <span>Everything in Complete Collection</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Sparkles className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>Your name in the Credits</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Check className="w-5 h-5 text-green-500 shrink-0" />
                <span>Gift 3 copies to friends</span>
              </li>
            </ul>

            <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-600 font-bold text-sm transition-colors group-hover:border-orange-600 group-hover:text-orange-600">
              Become a Patron
            </button>
          </div>

        </div>

        {/* The Final Verse (20.14) */}
        <div className="relative mt-24 text-center max-w-3xl mx-auto">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-6xl text-orange-100 font-serif">"</div>
             
             <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed mb-6">
                क्व चास्ति क्व च वा नास्ति <br/>
                क्वास्ति चैकं क्व च द्वयं। <br/>
                बहुनात्र किमुक्तेन <br/>
                किंचिन्नोत्तिष्ठते मम॥
             </p>

             <p className="text-gray-500 italic font-serif text-lg">
                "Where is existence? Where is non-existence? Where is oneness? Where is duality? <br/>
                What need is there to say more? Nothing arises in me."
             </p>

             <div className="mt-6 flex justify-center items-center gap-4">
                <div className="h-px w-12 bg-orange-200"></div>
                <span className="text-orange-600 font-sans text-xs font-bold uppercase tracking-widest">
                    Ashtavakra Gita 20.14
                </span>
                <div className="h-px w-12 bg-orange-200"></div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default AnnualPricing;