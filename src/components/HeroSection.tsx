import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/6055260e-fbbf-4b41-a067-3aa63de3f986/_result.png" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/40 via-black/80 to-black" />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ y, opacity, scale, rotateX }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-green-500/30 rounded-full text-green-400 text-sm tracking-wider uppercase">
            Since 1951 • Lagos, Nigeria
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-300 bg-clip-text text-transparent">
            7UP
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 text-xl md:text-3xl text-gray-400 font-light tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Bottling Company
        </motion.p>

        <motion.p
          className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Nigeria's premier aerated drinks supplier. Producing refreshment for millions 
          with iconic brands like 7UP, Pepsi, Mirinda & Aquafina.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.a
            href="#products"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-green-500/30 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
          </motion.a>
        </motion.div>
      </motion.div>

      {/* 3D Floating Bottle */}
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block"
        animate={{ y: [0, -20, 0], rotateY: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-32 h-80 transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
          {/* Bottle shape using CSS */}
          <div className="absolute inset-0 flex flex-col items-center">
            {/* Cap */}
            <div className="w-8 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-t-lg" />
            {/* Neck */}
            <div className="w-6 h-12 bg-gradient-to-b from-green-500/80 to-green-600/90" />
            {/* Body */}
            <div className="w-20 h-48 bg-gradient-to-b from-green-500/60 to-green-700/80 rounded-b-2xl border border-green-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black text-xs text-center">
                <div>7UP</div>
                <div className="text-[6px] mt-1 opacity-70">REFRESHING</div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-green-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
