import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: "Leke Adelaja",
    role: "Local Guide · 204 reviews",
    rating: 5,
    text: "They are the producers of the popular 7Up, Pepsi and Mirinda. They have a spacious factory here. Sometimes they however park their trucks on the road which usually impact on traffic flow from the Lagos Ibadan expressway.",
    time: "7 years ago"
  },
  {
    name: "Gerald",
    role: "312 reviews · 866 photos",
    rating: 5,
    text: "This is one of the oldest soft drink company in Nigeria. Touching lives over the years with a series of promotional gifts and consolation prizes. And also contributing to our national development through tax.",
    time: "7 years ago"
  },
  {
    name: "Heliocentric Concepts LTD",
    role: "Local Guide · 77 reviews",
    rating: 5,
    text: "Seven-Up Bottling Company Ikeja is a place where you can get soft drinks like Pepsis, Mirinda, and Aquafina bottle water. Energy drinks like Super Commando isn't in exclusion. Liquid and toilet soap is part of their major products too.",
    time: "4 years ago"
  },
  {
    name: "Adebayo Johnson",
    role: "Local Guide · 45 reviews",
    rating: 4,
    text: "Great company with a long history in Nigeria. Their products are always fresh and widely available. The Pepsi and 7UP remain my go-to drinks for any occasion.",
    time: "2 years ago"
  },
  {
    name: "Chioma Okafor",
    role: "12 reviews · 8 photos",
    rating: 5,
    text: "Aquafina water is the best bottled water in Nigeria. Clean, crisp, and always refreshing. The 7UP factory has been a landmark in Lagos for decades.",
    time: "1 year ago"
  }
]

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reviews" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-400 text-sm tracking-[0.3em] uppercase font-medium">Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            What People <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Say</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {i < 4 ? '⭐' : '⭐'}
                </motion.span>
              ))}
            </div>
            <span className="text-3xl font-black text-white">4.1</span>
            <span className="text-gray-400">· 182 reviews</span>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, x: 50, rotateY: 5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: -5 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: '1000px' }}
            >
              <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                {/* Quote mark */}
                <div className="absolute top-6 left-8 text-6xl text-green-500/20 font-serif">"</div>
                
                <div className="relative z-10">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                    {reviews[activeIndex].text}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold text-lg">{reviews[activeIndex].name}</div>
                      <div className="text-gray-500 text-sm">{reviews[activeIndex].role}</div>
                    </div>
                    <div className="text-gray-600 text-sm">{reviews[activeIndex].time}</div>
                  </div>

                  {/* Stars */}
                  <div className="mt-4 flex gap-1">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="mt-10 flex justify-center gap-3">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-green-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <motion.button
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-green-500/20 hover:border-green-500/30 transition-all"
              onClick={() => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              className="pointer-events-auto w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-green-500/20 hover:border-green-500/30 transition-all"
              onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Review tags */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {['pepsi', 'aquafina', '7up', 'soft drinks production', 'mirinda', 'factory', 'lagos'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-sm hover:border-green-500/30 hover:text-green-400 transition-all cursor-default"
            >
              #{tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
