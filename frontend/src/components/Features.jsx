import React from "react";
import { Sun, Route, Coffee, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sun className="w-6 h-6" />, // Removed specific text color here to let parent control it
      title: "Daily Delivery",
      tagline: "One Shloka. Every Morning.",
      description:
        "Sanskrit text, Hindi meaning, English translation, and clear commentary all in one beautifully formatted email at 7 AM.",
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Structured Journey",
      tagline: "Chapter 1 to 20. In Order.",
      description:
        "Verses arrive sequentially so you experience the full arc of the Gita the way it was meant to be understood.",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Accessible Wisdom",
      tagline: "Simple, Practical, No Jargon.",
      description:
        "Each verse is explained in simple language. Wisdom you can absorb over your morning chai.",
      extra: (
        // Added group-hover border and text logic
        <div className="mt-4 pt-4 border-t border-orange-100 group-hover:border-orange-500/30 transition-colors duration-300">
          <div className="flex items-start gap-2">
            {/* Globe Icon changes to white on hover */}
            <Globe size={16} className="text-orange-500 mt-0.5 shrink-0 group-hover:text-white transition-colors duration-300" />
            <p className="text-xs text-gray-500 font-medium group-hover:text-orange-100 transition-colors duration-300">
              <span className="text-orange-700 font-bold block mb-1 group-hover:text-white transition-colors duration-300">
                Regional Languages Available:
              </span>
              Punjabi, Malayalam, Telugu, Tamil, Marathi
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-orange-50/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731610_1px,transparent_1px),linear-gradient(to_bottom,#f9731610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
            What You'll Receive
          </h3>
          <h2 className="text-orange-600 font-sans font-bold tracking-widest uppercase text-2xs">
            A structured journey through the entire Ashtavakra Gita —{" "}
            <span className="italic text-orange-600">
              one morning at a time.
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-amber-100 rounded-2xl p-8 border border-orange-100 overflow-hidden cursor-pointer transition-all duration-900 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* THE ORANGE CIRCLE ANIMATION LAYER */}
              {/* Positioned at top-right, starts small, scales massively on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-orange-600 rounded-full transition-transform duration-900 ease-out group-hover:scale-[25]"></div>

              {/* CONTENT LAYER (Relative z-10 to stay on top of the orange circle) */}
              <div className="relative z-10 space-y-3">
                
                {/* Icon Circle */}
                {/* Default: Orange bg, White icon. Hover: White bg, Orange icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md transition-all duration-300
                              bg-orange-500 text-white 
                              group-hover:bg-white group-hover:text-orange-600 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Tagline */}
                {/* Default: Orange text. Hover: White text */}
                <h4 className="font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-300
                               text-orange-600 group-hover:text-orange-100">
                  {feature.tagline}
                </h4>

                {/* Title */}
                {/* Default: Gray text. Hover: White text */}
                <h3 className="font-serif text-2xl font-bold transition-colors duration-300
                               text-gray-900 group-hover:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                {/* Default: Gray text. Hover: Light Orange text */}
                <p className="leading-relaxed transition-colors duration-300
                              text-gray-600 group-hover:text-orange-50">
                  {feature.description}
                </p>

                {/* Extra Content (Languages) */}
                {feature.extra}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;