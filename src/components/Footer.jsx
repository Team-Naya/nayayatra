import React from 'react'

export default function Footer() {
  return (
    <footer className="p-4 md:p-6 mt-12">
      <div className="w-full rounded-[2rem] overflow-hidden relative bg-[#1C1917] text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center min-h-[60vh]">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop" 
          alt="Mountains" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        
        <div className="relative z-10 text-center max-w-2xl">
          <span className="text-white/80 font-medium tracking-widest uppercase text-xs mb-6 block">Ready to collaborate?</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
            Let's move forward with clarity.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
              View Open Roles
            </button>
          </div>
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center mt-32 text-sm text-white/60">
          <p>© 2026 Naya Yatra Pvt. Ltd.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
