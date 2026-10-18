import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: "Pragya Shabdakosh",
    desc: "Technical partnership with Nepal Academy. Transforms the 128,000+ word dictionary into an offline mobile database.",
  },
  {
    title: "Naya Paper",
    desc: "Minimalist online text editor featuring a Nepali Spell Checker and automated Preeti to Unicode conversion.",
  },
  {
    title: "Myna AI",
    desc: "Educational generative AI assistant optimized for native Apple ecosystems (iOS, macOS, Vision).",
  }
]

export default function SoftwareEngineering() {
  return (
    <section id="engineering" className="py-24 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto bg-[#F4F1E8] rounded-[3rem] p-8 md:p-20">
        <div className="mb-16">
          <span className="pill-tag">Engineering</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-xl leading-tight">
            Language utilities shaped by clarity and intent.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
           <div className="md:col-span-4">
             <h3 className="text-2xl font-medium mb-4">Core Infrastructure</h3>
             <p className="text-gray-500 leading-relaxed">Robust linguistic infrastructure specifically optimized for the Nepali language, accessible across web and mobile.</p>
           </div>
           
           <div className="md:col-span-8 flex flex-col gap-8">
             {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <h4 className="text-xl font-medium min-w-[200px]">{item.title}</h4>
                  <p className="text-gray-500 leading-relaxed flex-1">{item.desc}</p>
                </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  )
}
