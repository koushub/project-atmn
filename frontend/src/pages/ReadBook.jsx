// src/pages/ReadBook.jsx
import React, { useState, useEffect } from "react";
import { BookOpen, Loader2 } from "lucide-react"; // Added Loader2 icon

const ReadBook = () => {
  const [activeLang, setActiveLang] = useState("hindi + english");
  const [isLoading, setIsLoading] = useState(true);

  const books = {
    "hindi + english": "https://archive.org/embed/ashtavakra-gita-by-swami-nityaswarupananda",
    malayalam: "https://archive.org/embed/Ashtavakra_Gita_Malayalam",
    telugu: "https://archive.org/embed/in.ernet.dli.2015.391502",
  };

  // Triggered when a user clicks a language button
  const handleLangChange = (lang) => {
    if (lang !== activeLang) {
      setIsLoading(true); // Start showing the loader
      setActiveLang(lang);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-screen">
      {/* Header */}
      <div className="text-center mb-10 space-y-4">
        <div className="inline-flex items-center justify-center p-3 bg-orange-100 text-orange-600 rounded-full mb-2">
          <BookOpen size={32} />
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
          The Complete <span className="text-orange-600 italic">Ashtavakra</span> Gita
        </h1>
        <p className="text-gray-600 font-serif text-lg">
          Select your preferred language to begin reading.
        </p>
      </div>

      {/* Language Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(books).map((lang) => (
          <button
            key={lang}
            onClick={() => handleLangChange(lang)}
            className={`capitalize px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm
              ${
                activeLang === lang
                  ? "bg-orange-600 text-white shadow-orange-500/30 scale-105"
                  : "bg-white text-gray-600 hover:bg-orange-50 border border-gray-200"
              }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* The Container */}
      <div className="relative w-full bg-[#1e1e1e] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden h-[70vh] md:h-[85vh]">
        
        {/* LOADER OVERLAY: Only shows when isLoading is true */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1e1e1e] text-orange-500">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="font-serif animate-pulse text-lg">Opening the Granth...</p>
          </div>
        )}

        <iframe
          src={books[activeLang]}
          width="100%"
          height="100%"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          title={`Ashtavakra Gita in ${activeLang}`}
          // This event fires when the iframe content is finished loading
          onLoad={() => setIsLoading(false)}
          className="relative z-10"
        ></iframe>
      </div>
    </div>
  );
};

export default ReadBook;