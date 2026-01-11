import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], [0, -150])

  // SMOOTH SCROLL TO TOP ON ROUTE CHANGE
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div ref={containerRef} className="bg-[#FAF9F6] text-[#1A1A1A] selection:bg-pink-100 selection:text-pink-900 font-sans min-h-screen">
      
      {/* --- HERO SECTION (unchanged) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.03]"
        >
          <h1 className="text-[25vw] font-serif uppercase leading-none whitespace-nowrap">Botanical</h1>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-emerald-800 font-black tracking-[0.5em] uppercase text-[10px] bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                Established 2008 • Sindgi
              </span>
            </div>
            <h1 className="text-6xl md:text-[9rem] font-serif leading-[0.8] tracking-tighter mb-10">
              The <span className="text-pink-400 italic font-light">Art</span> <br /> 
              of <span className="italic">Silence.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-lg font-light leading-relaxed italic border-l-4 border-emerald-200 pl-8 ml-2">
              "We speak in petals, designing spaces that capture the ephemeral beauty of life's greatest moments."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-20">
              <div className="rounded-t-[20rem] rounded-b-3xl overflow-hidden aspect-[3/4] shadow-2xl border-[15px] border-white relative">
                <img 
                  src="https://res.cloudinary.com/dyxijlh28/image/upload/v1768115023/Screenshot_2026-01-11_123245_mdh04m.png" 
                  className="w-full h-full object-cover" 
                  alt="Floral Masterpiece" 
                />
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-emerald-50 text-center min-w-[180px]"
              >
                <h3 className="text-5xl font-serif text-emerald-900 leading-none">12K<span className="text-pink-400">+</span></h3>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mt-3">Events Curated</p>
                <div className="mt-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* --- MANIFESTO, PILLARS SECTIONS (unchanged) --- */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group overflow-hidden rounded-[3rem]">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1000" className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-105" alt="Process" />
            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-all" />
          </div>
          <div className="space-y-10">
            <h2 className="text-5xl font-serif leading-tight">Crafting a <span className="italic">Legacy</span> of Botanical Luxury.</h2>
            <div className="h-px w-24 bg-pink-300" />
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              For three generations, GP Flower Decorators has served the Vijaynagar region. We treat every wedding mandap as a piece of architecture, balancing structural strength with the delicate fragility of seasonal blooms.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div><h4 className="text-emerald-900 font-serif text-2xl mb-2">Purity</h4><p className="text-sm text-gray-400">Directly sourced A-grade blooms from Karnataka's best farms.</p></div>
              <div><h4 className="text-emerald-900 font-serif text-2xl mb-2">Passion</h4><p className="text-sm text-gray-400">A family-first approach where every detail is handled by an artisan.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#062419] text-white px-6 md:px-20 rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">Why GP <br /><span className="text-pink-300 italic">Studio?</span></h2>
            <p className="text-emerald-200/50 uppercase tracking-[0.4em] text-[10px] max-w-xs leading-loose">The standards that define Sindgi's most trusted floral partner.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Native Expertise', desc: '15+ years exclusively serving Sindgi. We know every venue\'s unique lighting and logistics.' },
              { title: 'Hydration Locking', desc: 'Our unique 48-hour freshness guarantee using proprietary floral care techniques.' },
              { title: 'Structural Design', desc: 'Safety meets beauty. Custom metal scaffolding for grand, worry-free mandaps.' }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-serif italic text-xl mb-6">{i + 1}</div>
                <h4 className="text-2xl font-serif mb-4">{item.title}</h4>
                <p className="text-emerald-100/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FIXED: SMOOTH BOOK CONSULTATION BUTTON --- */}
      <section className="py-40 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-[8rem] font-serif tracking-tighter mb-12 leading-none">
            Ready to <br /><span className="text-pink-400 italic">Bloom?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <SignedIn>
              <Link 
                to="/book"
                onClick={scrollToTop}  // ✅ SMOOTH SCROLL BEFORE NAVIGATION
                className="block"     // ✅ Prevents layout shift
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-black transition-all shadow-2xl"
                >
                  Book a Consultation
                </motion.button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-black transition-all shadow-2xl"
                >
                  Book a Consultation
                </motion.button>
              </SignInButton>
            </SignedOut>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
