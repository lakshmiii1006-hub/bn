// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

// Replace with your actual path to the logo
import GPLogo from '../assets/gp-logo.png' 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/book' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    // Background is a soft "Paper" white (bg-[#fafaf9]) to suit magazine vibes
    <nav className="fixed top-0 w-full bg-[#fafaf9]/95 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO IN THE CORNER */}
          <Link to="/" className="flex items-center gap-4 group">
             <img 
               src={GPLogo} 
               alt="GP Flower Decorators" 
               className="h-14 w-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
             />
             <div className="hidden sm:flex flex-col border-l border-stone-300 pl-4">
                <span className="text-sm font-black tracking-widest text-[#1c1917] uppercase">GP FLOWER</span>
                <span className="text-[10px] tracking-[0.3em] text-[#44403c] uppercase font-light">Decorators</span>
             </div>
          </Link>

          {/* NAV LINKS - Deep Moss Green Text (#166534) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-green-700 ${
                  isActive(item.path) 
                  ? 'text-[#166534] font-bold border-b border-[#166534]' 
                  : 'text-stone-500'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* AUTH & PROFILE */}
            <div className="flex items-center gap-4 ml-4 border-l pl-8 border-stone-200">
              <SignedIn>
                <Link to="/admin" className="text-[10px] font-bold uppercase tracking-widest bg-[#1c1917] text-white px-4 py-2 hover:bg-[#44403c] transition-colors">
                  Admin
                </Link>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-stone-500 hover:text-black">Login</button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden text-stone-800" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fafaf9] border-t border-stone-200 px-6 py-8 space-y-6 flex flex-col items-center">
          {navItems.map(item => (
            <Link 
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-[0.3em] ${
                isActive(item.path) ? 'text-[#166534] font-bold' : 'text-stone-600'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <SignedIn>
             <Link to="/admin" className="w-full text-center py-3 bg-[#1c1917] text-white text-xs uppercase tracking-widest" onClick={() => setMobileOpen(false)}>Admin Dashboard</Link>
          </SignedIn>
        </div>
      )}
    </nav>
  )
}