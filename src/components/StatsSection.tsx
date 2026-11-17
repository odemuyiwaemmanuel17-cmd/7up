import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: 70, suffix: "+", label: "Years of Excellence", icon: "🏆" },
  { value: 182, suffix: "", label: "Customer Reviews", icon: "⭐" },
  { value: 4.1, suffix: "/5", label: "Average Rating", icon: "📊" },
  { value: 36, suffix: "+", label: "States Covered", icon: "🇳🇬" },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/30 via-black to-emerald-950/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Horizontal lines decoration */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 1.5 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            Numbers That
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          setCount(stat.value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current * 10) / 10)
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 40, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      style={{ perspective: '800px' }}
    >
      <motion.div
        className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-center overflow-hidden"
        whileHover={{ 
          scale: 1.05, 
          rotateY: 5,
          borderColor: 'rgba(34, 197, 94, 0.3)',
          backgroundColor: 'rgba(34, 197, 94, 0.05)'
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="text-4xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        >
          {stat.icon}
        </motion.div>
        
        <div className="text-4xl md:text-5xl font-black text-white">
          {typeof stat.value === 'number' && stat.value % 1 !== 0 
            ? count.toFixed(1) 
            : Math.floor(count)}
          <span className="text-green-400">{stat.suffix}</span>
        </div>
        
        <div className="mt-2 text-gray-400 text-sm">{stat.label}</div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-500" />
      </motion.div>
    </motion.div>
  )
}
