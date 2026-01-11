import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'https://gp-backend-ddgp.onrender.com/api';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/events`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
      setEvents(Array.isArray(response.data) ? response.data : []);
      setError('');
    } catch (err) {
      console.error("Error details:", err.response?.data);
      setError(err.response?.data?.message || 'Failed to load events');
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-pink-200 border-t-pink-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] pb-10 relative font-sans selection:bg-pink-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 px-6 text-center overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[550px] h-[550px] opacity-[0.15] z-0 pointer-events-none text-pink-400"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current">
            <g>
              {[...Array(12)].map((_, i) => (
                <path 
                  key={i}
                  d="M50 50 Q60 10 70 50 T50 90 T30 50 T50 10" 
                  transform={`rotate(${i * 30} 50 50)`}
                  strokeWidth="0.4"
                />
              ))}
              <circle cx="50" cy="50" r="10" strokeWidth="0.3" />
            </g>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-emerald-900 mb-4 block">
            GP Flower Decorators
          </span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter leading-tight text-[#062419]">
            Events Organized by <span className="text-pink-500 italic font-light">GP Flower Decorators.</span>
          </h1>
          <div className="h-px w-16 bg-pink-400 mx-auto mt-6 opacity-40" />
        </motion.div>
      </section>

      {/* --- RESPONSIVE GRID (2 columns mobile, 3 columns desktop) --- */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 mb-24 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-14">
          {events.map((event, index) => (
            <motion.div 
              key={event._id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Image Card */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] md:rounded-[4rem] shadow-sm bg-white border border-gray-100 transition-all duration-700 group-hover:shadow-2xl md:group-hover:-translate-y-2">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                
                {event.isFeatured && (
                  <div className="absolute top-2 right-2 md:top-5 md:right-6 bg-pink-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-md z-10">
                    <p className="text-[5px] md:text-[10px] font-bold uppercase tracking-widest">Featured</p>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="mt-4 md:mt-8 text-center px-2">
                <p className="text-[6px] md:text-[10px] font-black text-pink-500 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2">
                  Project {index + 101}
                </p>
                <h3 className="text-xs md:text-2xl font-serif italic text-[#062419] group-hover:text-pink-600 transition-colors truncate">
                  {event.name}
                </h3>
                <div className="hidden md:block h-px w-8 bg-gray-200 mx-auto mt-4 transition-all group-hover:w-16 group-hover:bg-pink-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {events.length === 0 && !loading && (
          <div className="text-center py-20">
            <p className="text-gray-400 italic">No events found.</p>
          </div>
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="mt-32 relative px-6 md:px-20 pb-16">
        <div className="max-w-7xl mx-auto bg-[#062419] rounded-[4rem] md:rounded-[5rem] overflow-hidden relative min-h-[450px] flex items-center shadow-2xl border border-emerald-900/50">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none select-none">
            <h2 className="text-[10vw] font-serif text-white leading-none">GP</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 p-10 md:p-20 items-center w-full relative z-10">
            <div className="text-left">
              <p className="text-emerald-400 font-black uppercase tracking-[0.5em] text-[9px] mb-5">
                Established 2008 • Sindgi
              </p>
              <h3 className="text-white font-serif italic text-4xl md:text-6xl leading-[1.1]">
                Define your space <br /> 
                <span className="text-pink-300 font-light">with GP Artistry.</span>
              </h3>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center">
              <div className="max-w-xs md:text-right">
                <p className="text-emerald-100/40 text-[13px] font-light leading-relaxed mb-8 italic">
                  Every celebration is a canvas. We provide the architecture and the soul to make it timeless.
                </p>
                <Link 
                  to="/contact"
                  onClick={scrollToTop}
                  className="block"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#062419] transition-all"
                  >
                    Inquire Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Event;