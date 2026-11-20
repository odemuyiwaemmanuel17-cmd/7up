import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"
        style={{ x }}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-green-400 text-sm tracking-[0.3em] uppercase font-medium">Our Legacy</span>
              <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Refreshing Nigeria
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Since 1951
                </span>
              </h2>
            </motion.div>

            <motion.p
              className="mt-8 text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Seven-Up Bottling Company is one of Nigeria's oldest and most respected soft drink companies. 
              For over seven decades, we've been touching lives through our series of promotional gifts, 
              consolation prizes, and contributing to national development.
            </motion.p>

            <motion.p
              className="mt-4 text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              From our spacious factory at 1 Mobolaji Johnson Avenue, Oregun, Lagos, we produce and distribute 
              the nation's favourite beverages — 7UP, Pepsi, Mirinda, and Aquafina — reaching every corner 
              of Nigeria.
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <TimelineItem year="1951" text="Company Founded" />
              <TimelineItem year="1970s" text="Massive Expansion" />
              <TimelineItem year="1990s" text="National Coverage" />
              <TimelineItem year="2024" text="Industry Leader" />
            </motion.div>
          </div>

          {/* Right - 3D Card Stack */}
          <motion.div
            className="relative h-[500px]"
            style={{ perspective: '1200px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-emerald-900/20 rounded-3xl border border-green-500/20 backdrop-blur-sm"
              style={{ rotateY: rotate, rotateX: 5, transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-6xl font-black text-green-400/20" style={{ fontFamily: 'Playfair Display, serif' }}>7UP</div>
                  <div className="mt-4 text-gray-300 text-xl font-light">Premium Quality</div>
                  <div className="mt-2 text-gray-500">Crafted with excellence for over 70 years</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-gray-300">ISO Certified Production</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-gray-300">Nationwide Distribution</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-gray-300">Multiple Award Winner</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center text-black">
                <div className="text-2xl font-black">70+</div>
                <div className="text-[8px] font-bold uppercase">Years</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ year, text }: { year: string; text: string }) {
  return (
    <div className="group">
      <div className="text-green-400 font-bold text-lg">{year}</div>
      <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">{text}</div>
    </div>
  )
}
