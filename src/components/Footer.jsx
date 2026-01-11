import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GPLogo from '../assets/gp-logo.png' 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Deep Forest Green background with pure white text
    <footer className="bg-[#062c20] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
               <div className="bg-white/15 p-2 rounded-xl">
                  <img 
                    src={GPLogo} 
                    alt="GP Logo" 
                    className="h-16 w-auto object-contain brightness-110 contrast-125"
                  />
               </div>
               <div className="flex flex-col border-l border-white/40 pl-4">
                  <span className="text-lg font-serif italic tracking-tighter text-white">GP Flower</span>
                  <span className="text-[10px] tracking-[0.4em] text-white uppercase font-bold">Decorators</span>
               </div>
            </div>
            {/* Changed from white/60 to pure white */}
            <p className="text-sm leading-relaxed text-white max-w-xs font-light">
              Premium floral artistry and event decoration services. Crafting unforgettable botanical experiences since 1998.
            </p>
            
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-black text-white mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    onClick={item === 'Home' ? handleHomeClick : null}
                    className="text-sm text-white hover:underline decoration-white/30 underline-offset-4 transition-all flex items-center group"
                  >
                    {item}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-black text-white mb-8">Services</h3>
            <ul className="space-y-4 text-sm text-white font-light">
              <li className="hover:underline decoration-white/30 underline-offset-4 cursor-pointer transition-all">Wedding Decor</li>
              <li className="hover:underline decoration-white/30 underline-offset-4 cursor-pointer transition-all">Corporate Events</li>
              <li className="hover:underline decoration-white/30 underline-offset-4 cursor-pointer transition-all">Stage Backdrops</li>
              <li className="hover:underline decoration-white/30 underline-offset-4 cursor-pointer transition-all">Custom Bouquets</li>
            </ul>
          </div>

          {/* Contact Information Block */}
          <div className="md:col-span-4 bg-white/10 border border-white/20 p-8 rounded-3xl">
            <h3 className="text-[11px] uppercase tracking-[0.25em] font-black text-white mb-8">Studio Info</h3>
            <div className="space-y-6 text-sm text-white">
              <div className="flex items-start space-x-4">
                <MapPin size={18} className="text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed font-medium">
                 Mallikarjuna Complex, Infront of A.P.M.C, Near Court, Nanjanagudi Road, <br />
                  T Narasipura, Karanataka.
                </span>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={18} className="text-white shrink-0 mt-0.5" strokeWidth={1.5} />
                <div className="flex flex-col font-bold">
                  <span>+91 98441 60165</span>
                  <span>+91 99641 18761</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock size={18} className="text-white shrink-0" strokeWidth={1.5} />
                <span className="font-light italic">Daily: 9:00 AM — 9:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] font-medium text-white">
          <p className="uppercase">
            &copy; {currentYear} GP FLOWER DECORATORS. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex space-x-8 mt-6 md:mt-0 uppercase font-bold">
            <Link to="/privacy" className="hover:opacity-70 transition-opacity">Privacy</Link>
            <Link to="/terms" className="hover:opacity-70 transition-opacity">Terms</Link>
            <Link to="/sitemap" className="hover:opacity-70 transition-opacity">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}