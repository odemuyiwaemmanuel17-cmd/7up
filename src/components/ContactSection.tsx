import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-green-950/20" />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-400 text-sm tracking-[0.3em] uppercase font-medium">Get In Touch</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ContactCard
              icon="📍"
              title="Address"
              lines={["1 Mobolaji Johnson Ave, Oregun", "Lagos 100111, Lagos, Nigeria"]}
              delay={0.2}
            />
            <ContactCard
              icon="📞"
              title="Phone"
              lines={["0805 690 0900"]}
              delay={0.4}
            />
            <ContactCard
              icon="🕐"
              title="Business Hours"
              lines={["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 2:00 PM", "Sunday: Closed"]}
              delay={0.6}
            />
            <ContactCard
              icon="📦"
              title="Plus Code"
              lines={["J92F+R9 Lagos"]}
              delay={0.8}
            />
          </motion.div>

          {/* Map / Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative h-full min-h-[400px] rounded-3xl border border-white/10 bg-gradient-to-br from-green-900/20 to-emerald-900/10 overflow-hidden"
              whileHover={{ rotateY: -3, rotateX: 2 }}
              transition={{ duration: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Map placeholder with animated elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 -m-16 border border-green-500/20 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 -m-24 border border-green-500/10 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  />
                  
                  {/* Location pin */}
                  <motion.div
                    className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-3xl">📍</span>
                  </motion.div>
                </div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Location text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-xl bg-black/50 backdrop-blur-sm border border-white/5">
                  <div className="text-green-400 font-medium">7UP Bottling Company</div>
                  <div className="text-gray-400 text-sm mt-1">Oregun, Lagos • Open · Closes 5 pm</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="https://www.sevenup.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Our Website →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, lines, delay }: { icon: string; title: string; lines: string[]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-green-500/20 hover:bg-green-500/5 transition-all duration-300 group"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ x: 5 }}
    >
      <motion.div
        className="text-3xl flex-shrink-0"
        whileHover={{ scale: 1.2, rotate: 10 }}
      >
        {icon}
      </motion.div>
      <div>
        <div className="text-white font-semibold group-hover:text-green-400 transition-colors">{title}</div>
        {lines.map((line, i) => (
          <div key={i} className="text-gray-400 text-sm mt-1">{line}</div>
        ))}
      </div>
    </motion.div>
  )
}
