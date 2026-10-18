import React from 'react'
import { motion } from 'framer-motion'

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="pill-tag">Ecosystem</span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight max-w-2xl mx-auto leading-tight">
          A dedicated network for meaningful connections.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="warm-card p-10 flex flex-col justify-between aspect-square md:aspect-auto">
          <div>
            <span className="text-[#8B7355] text-sm font-bold mb-4 block">01</span>
            <h3 className="text-3xl font-medium mb-4">Web Platform</h3>
            <p className="text-gray-600 leading-relaxed text-lg">naya.com.np functions as a decentralized space where users build profiles, publish posts, and operate local community hubs.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-[2rem] overflow-hidden aspect-square md:aspect-auto">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop" alt="People working" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] overflow-hidden aspect-square md:aspect-auto">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" alt="Data and mobile" className="w-full h-full object-cover" />
        </motion.div>

        <div className="grid grid-rows-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="warm-card p-10 flex flex-col justify-center">
            <span className="text-[#8B7355] text-sm font-bold mb-4 block">02 / Mobile Software</span>
            <h3 className="text-2xl font-medium mb-2">The Naya App</h3>
            <p className="text-gray-600 leading-relaxed">The unified ecosystem: decentralized Conversations, offline Notes, and bloat-free scanning tools.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="warm-card bg-[#E8E4D9] p-10 flex flex-col justify-center">
            <span className="text-[#8B7355] text-sm font-bold mb-4 block">03 / AI Platform</span>
            <h3 className="text-2xl font-medium mb-2">Naya News AI</h3>
            <p className="text-gray-600 leading-relaxed">Automated news hub utilizing custom ML scripts to systematically scrape, cluster, and categorize articles.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
