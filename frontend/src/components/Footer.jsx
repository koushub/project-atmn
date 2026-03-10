import React from 'react';
import { Mail, Heart, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
               {/* Small Logo Placeholder */}
               <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-serif font-bold">ॐ</span>
               </div>
               <span className="font-serif text-xl font-bold text-gray-900">Project Atmn</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-serif">
              Bringing ancient non-dual wisdom to the modern inbox. 
              Simple, accessible, and free forever.
            </p>
            
            {/* Social Icons (Optional placeholders) */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Upcoming Wisdom */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
              Coming Soon
            </h4>
            <ul className="space-y-3">
              <li>
                <div className="group flex items-start justify-between gap-2 text-sm text-gray-600">
                  <span>Upanishad Wisdom</span>
                  <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-[10px] font-bold rounded uppercase tracking-wide">
                    Soon
                  </span>
                </div>
              </li>
              <li>
                <div className="group flex flex-col items-start gap-1 text-sm text-gray-600">
                  <span>Bhagavad Gita</span>
                  <span className="text-[10px] text-gray-400">
                    (Multiple Languages)
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@projectatmn.com" 
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
                >
                  <Mail size={16} className="group-hover:stroke-orange-600 transition-colors" />
                  hello@projectatmn.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Have a suggestion? We'd love to hear from you.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-sans">
            © {new Date().getFullYear()} Project Atmn. All rights reserved.
          </p>
          
          <p className="text-xs text-gray-400 font-sans flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> for the Truth
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;