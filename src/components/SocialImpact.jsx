import React from 'react'
import { motion } from 'framer-motion'

export default function SocialImpact() {
  return (
    <section id="impacters" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <span className="pill-tag">Civic Tech & Impact</span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto leading-tight mb-6">
          A clear process toward sustainable development.
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">Operated through Impacters (WODES) to apply hardware and software competencies to rural and economic problems.</p>
      </div>

      <div className="space-y-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="text-[#8B7355] text-2xl">01</div>
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-3">Project Saathi — Agri AI Edge</h3>
            <p className="text-gray-600 leading-relaxed">Agricultural automation framework deploying custom computer vision models to edge devices. Diagnoses plant illnesses and tracks soil parameters for smallholder farmers.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="text-[#8B7355] text-2xl">02</div>
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-3">Project Biruwa — Aeroponics</h3>
            <p className="text-gray-600 leading-relaxed">Low-pressure vertical aeroponics systems for urban-displaced female farmers. Utilizes software pipelines and mist-spray intervals to cut water demands by up to 95%.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="text-[#8B7355] text-2xl">03</div>
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-3">The Sandbox — STEM Grants</h3>
            <p className="text-gray-600 leading-relaxed">A structured mentorship program providing young local scientists with financing, machinery tools, and coding advice to build prototypes.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
