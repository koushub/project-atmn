import React, { useState } from "react";
import axios from "axios";
import { Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const Pricing = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Axios handles the JSON stringification and headers for you
      await axios.post("http://127.0.0.1:5000/api/subscribe", { email });

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Failed to subscribe", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-6 bg-orange-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-orange-600 font-sans font-bold tracking-widest uppercase text-2xs">
            Join the Community
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Begin your journey toward{" "}
            <span className="italic text-orange-600">Self-Realization.</span>
          </h3>
        </div>

        {/* The Dark "Seva" Card - Horizontal Layout */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0F1115] shadow-2xl border border-gray-800 group">
          {/* Background Glow Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-14 items-center">
            {/* LEFT SIDE: Value Proposition & Price (Col Span 5) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-900/30 border border-orange-500/30 rounded-full text-orange-400 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={12} /> Seva Project
              </div>

              <div className="space-y-4">
                <h4 className="text-gray-400 font-sans text-sm font-bold uppercase tracking-widest">
                  Seeker's Plan
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-6xl md:text-7xl font-bold text-white tracking-tight">
                    Free
                  </span>
                  <span className="text-gray-500 font-medium text-lg">
                    / Forever
                  </span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                  This wisdom belongs to everyone. No paywalls, no ads, just the
                  pure teaching.
                </p>

                <div className="flex items-center gap-2 text-green-400/90 text-sm font-medium pt-2">
                  <ShieldCheck size={16} /> No credit card required
                </div>
              </div>
            </div>

            {/* MIDDLE: Divider (Visible only on Desktop) */}
            <div className="hidden lg:block lg:col-span-1 h-full w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent mx-auto"></div>

            {/* RIGHT SIDE: Features & Action (Col Span 6) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Features Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                {[
                  "Daily Ashtavakra Verse",
                  "Sanskrit, Hindi & English",
                  "Simple Hinglish Meaning",
                  "Full Archive Access",
                  "Cancel Anytime",
                  "500+ Community",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="mt-1 p-0.5 bg-orange-500/20 rounded-full text-orange-400">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* The "Action Box" */}
              <form
                onSubmit={handleSubscribe}
                className="bg-gray-800/50 rounded-xl p-2 border border-gray-700/50 flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  required
                  value={email} // FIX 2: Bind the input to the state
                  onChange={(e) => setEmail(e.target.value)} // FIX 3: Update state when user types
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder:text-gray-500 text-sm font-sans"
                />
                <button
                  type="submit" // FIX 4: Make sure the button submits the form
                  disabled={status === "loading"}
                  className="cursor-pointer bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-70"
                >
                  {status === "loading" ? (
                    "Sending..." // FIX 5: Show loading state
                  ) : (
                    <>
                      Start Now <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
              <div className="min-h-[20px]">
                {status === "success" && (
                  <p className="text-sm text-green-400 text-center sm:text-left pl-2">
                    ✨ Welcome! Check your inbox for your first shloka.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center sm:text-left pl-2">
                    Something went wrong. Please try again.
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-xs text-gray-500 text-center sm:text-left pl-2">
                    Join 500+ seekers. 100% Free & Spam-free.
                  </p>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
