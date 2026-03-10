import React from 'react';
import { 
  Reply, 
  Archive, 
  Trash2, 
  Mail, 
  Printer,
  Inbox,
  Star,
  Clock,
  Tag,
  AlertOctagon,
  Send,
  File,
  PenSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const EmailPreview = () => {
  return (
    <section className="py-20 px-4 bg-orange-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-orange-600 font-sans font-bold tracking-widest uppercase text-xs">
            The Experience
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Timeless Wisdom, <br className="md:hidden" /> delivered to your Inbox.
          </h3>
        </div>

        {/* The Gmail Mockup Container */}
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden mx-auto flex flex-col h-[800px] md:h-auto">
            
            {/* 1. Fake Browser Toolbar (Top Bar) */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-4">
                 {/* Window Controls */}
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500/20"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500/20"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500/20"></div>
                 </div>
               </div>
               
               {/* Search Bar Placeholder (Visual only) */}
               <div className="hidden md:flex flex-1 max-w-lg mx-8 bg-gray-200/50 rounded-lg px-4 py-2 text-sm text-gray-500 items-center gap-2">
                  <span className="opacity-50">Search mail</span>
               </div>

               {/* Right Actions */}
               <div className="flex gap-4 text-gray-400">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    K
                  </div>
               </div>
            </div>

            {/* 2. Main Flex Container (Sidebar + Content) */}
            <div className="flex flex-1 overflow-hidden">
              
              {/* LEFT SIDEBAR */}
              <div className="w-16 md:w-56 bg-white border-r border-gray-100 flex-shrink-0 flex flex-col py-4">
                
                {/* Compose Button */}
                <div className="px-2 md:px-4 mb-6 flex justify-center md:justify-start">
                  <div className="flex items-center gap-3 bg-orange-100/50 text-orange-900 hover:shadow-md transition-all rounded-2xl p-3 md:py-4 md:px-6 cursor-pointer w-fit">
                    <PenSquare size={20} className="text-orange-600"/>
                    <span className="font-semibold text-sm hidden md:block">Compose</span>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-1 flex-1 px-2">
                  <SidebarItem icon={<Inbox size={18} />} label="Inbox" active count="1" />
                  <SidebarItem icon={<Star size={18} />} label="Starred" />
                  <SidebarItem icon={<Clock size={18} />} label="Snoozed" />
                  <SidebarItem icon={<Send size={18} />} label="Sent" />
                  <SidebarItem icon={<File size={18} />} label="Drafts" />
                  <SidebarItem icon={<Tag size={18} />} label="Important" />
                  <SidebarItem icon={<AlertOctagon size={18} />} label="Spam" />
                </nav>

                {/* Bottom Tags */}
                <div className="hidden md:block px-6 pb-4 mt-auto">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Labels</h4>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div> Work
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div> Personal
                        </div>
                    </div>
                </div>
              </div>

              {/* RIGHT CONTENT (The Email) */}
              <div className="flex-1 flex flex-col bg-white overflow-y-auto">
                  
                  {/* Email Toolbar - ADJUSTED FOR MOBILE */}
                  <div className="flex items-center justify-between px-3 md:px-6 py-3 border-b border-gray-100 text-gray-500 shrink-0 sticky top-0 bg-white/95 backdrop-blur z-10">
                     <div className="flex gap-3 md:gap-6">
                        <Archive size={18} className="hover:text-gray-800 cursor-pointer"/>
                        <AlertOctagon size={18} className="hover:text-gray-800 cursor-pointer"/>
                        <Trash2 size={18} className="hover:text-gray-800 cursor-pointer"/>
                        <div className="w-px h-5 bg-gray-200"></div>
                        <Mail size={18} className="hover:text-gray-800 cursor-pointer"/>
                        <Clock size={18} className="hover:text-gray-800 cursor-pointer"/>
                     </div>
                     <div className="flex items-center gap-2 md:gap-4 text-xs">
                        {/* Hidden on mobile to save space */}
                        <span className="hidden sm:inline">1 of 1</span>
                        <div className="flex gap-2">
                            <ChevronLeft size={16} className="text-gray-300"/>
                            <ChevronRight size={16} className="text-gray-300"/>
                        </div>
                     </div>
                  </div>

                  {/* Email Header */}
                  <div className="px-4 md:px-8 py-6 pb-2">
                     <div className="flex justify-between items-start mb-6">
                        <h2 className="text-lg md:text-2xl font-serif font-bold text-gray-900 leading-tight">
                            Daily Wisdom: Ashtavakra Gita 5.1
                        </h2>
                        <div className="flex gap-2 shrink-0 ml-2">
                            <div className="bg-gray-100 p-1.5 rounded hover:bg-gray-200 cursor-pointer">
                                <Printer size={16} className="text-gray-500" />
                            </div>
                            <div className="bg-gray-100 p-1.5 rounded hover:bg-gray-200 cursor-pointer">
                                <Reply size={16} className="text-gray-500" />
                            </div>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-3">
                         <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold font-serif text-lg shrink-0">
                             ॐ
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline flex-wrap">
                                <span className="font-bold text-gray-900 text-sm truncate">Daily Ashtavakra</span>
                                <span className="text-xs text-gray-400 hidden sm:block">
                                    {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}
                                </span>
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                to me <ChevronLeft size={10} className="-rotate-90"/>
                            </div>
                         </div>
                     </div>
                  </div>

                  {/* Email Body Content */}
                  <div className="px-4 md:px-8 py-6 space-y-10 max-w-3xl">
                    
                    {/* A. SANSKRIT */}
                    <div className="text-center space-y-4">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2">
                            Sanskrit
                        </span>
                        <p className="font-serif text-xl md:text-3xl text-gray-800 leading-relaxed whitespace-pre-line">
                            अष्टावक्र उवाच
                            न ते संगोऽस्ति केनापि
                            किं शुद्धस्त्यक्तुमिच्छसि।
                            संघातविलयं कुर्वन्-
                            नेवमेव लयं व्रज॥
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-12 h-1 bg-orange-200 rounded-full"></div>
                    </div>

                    {/* B. HINDI */}
                    <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100 text-center md:text-left">
                        <h4 className="font-sans text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
                            Hindi Translation
                        </h4>
                        <p className="font-serif text-base md:text-lg text-gray-800 leading-relaxed">
                            तुम्हारा किसी से भी संयोग नहीं है, तुम शुद्ध हो, तुम क्या त्यागना चाहते हो? इस (अवास्तविक) सम्मिलन को समाप्त कर के ब्रह्म से योग (एकरूपता) को प्राप्त करो॥
                        </p>
                    </div>

                    {/* C. ENGLISH */}
                    <div className="text-center md:text-left px-2 pb-12">
                        <h4 className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                            English Translation
                        </h4>
                        <p className="font-serif text-base md:text-lg text-gray-600 leading-relaxed italic">
                            "Ashtavakra says: You are not connected with anything. You are pure. What do you want to renounce? Dissolve this unreal connection and be one with Self."
                        </p>
                    </div>
                  </div>

              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

// Helper Component: RESPONSIVE SIDEBAR ITEM
// Mobile: Centered square (w-10 h-10)
// Desktop: Extended tab (px-4 py-2)
const SidebarItem = ({ icon, label, active, count }) => {
  return (
    <div className={`
        flex items-center transition-colors cursor-pointer group
        /* MOBILE STYLES: Centered square */
        justify-center w-10 h-10 mx-auto rounded-xl
        /* DESKTOP STYLES: Left-aligned tab */
        md:justify-between md:w-auto md:h-auto md:mx-2 md:px-4 md:py-2 md:rounded-r-full
        ${active ? 'bg-orange-100 text-orange-800 font-semibold' : 'text-gray-600 hover:bg-gray-100'}
    `}>
      <div className="flex items-center gap-4">
        <span className={`${active ? 'text-orange-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
            {icon}
        </span>
        <span className="text-sm hidden md:block">{label}</span>
      </div>
      {count && (
        <span className="text-xs font-bold hidden md:block">{count}</span>
      )}
    </div>
  );
};

export default EmailPreview;