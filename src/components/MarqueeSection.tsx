import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const brands = ["7UP", "PEPSI", "MIRINDA", "AQUAFINA", "SUPER COMMANDO", "TEEM"]
  const tagline = "REFRESHING NIGERIA • SINCE 1951 •"

  return (
    <section ref={ref} className="relative py-20 overflow-hidden border-y border-white/5">
      <motion.div style={{ opacity }}>
        {/* Row 1 - Brands */}
        <motion.div className="flex gap-12 mb-8 whitespace-nowrap" style={{ x: x1 }}>
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={`brand-${i}`}
              className="text-5xl md:text-7xl font-black text-white/[0.03] hover:text-green-400/20 transition-colors duration-500 cursor-default"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {brand}
            </span>
          ))}
        </motion.div>

        {/* Row 2 - Tagline */}
        <motion.div className="flex gap-8 whitespace-nowrap" style={{ x: x2 }}>
          {[...Array(8)].map((_, i) => (
            <span key={`tag-${i}`} className="text-lg md:text-xl text-green-400/20 tracking-[0.3em] uppercase">
              {tagline}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
