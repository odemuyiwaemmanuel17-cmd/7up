import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const products = [
  {
    name: "7UP",
    tagline: "The Original Lemon-Lime",
    description: "The iconic lemon-lime flavoured soft drink that has refreshed Nigerians for over 70 years. Crisp, clean, and unmistakably 7UP.",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
    emoji: "🍋"
  },
  {
    name: "Pepsi",
    tagline: "That's What I Like",
    description: "The bold, refreshing cola that's loved by millions. Pepsi brings people together with its distinctive taste and energizing fizz.",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    emoji: "🥤"
  },
  {
    name: "Mirinda",
    tagline: "Explosive Orange Taste",
    description: "Bursting with vibrant orange flavour, Mirinda delivers an explosive fruit experience that's fun, refreshing, and full of character.",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    emoji: "🍊"
  },
  {
    name: "Aquafina",
    tagline: "Pure Water, Pure Life",
    description: "Premium purified water processed through a rigorous multi-step filtration system. Clean, crisp, and perfectly refreshing.",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
    emoji: "💧"
  },
  {
    name: "Super Commando",
    tagline: "Unleash Your Energy",
    description: "The energy drink that powers you through the day. Super Commando delivers the boost you need to conquer every challenge.",
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
    emoji: "⚡"
  },
  {
    name: "Teem",
    tagline: "Fruit Flavoured Fun",
    description: "A delightful fruit-flavoured soft drink that brings joy in every sip. Light, refreshing, and perfect for any occasion.",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    emoji: "🍑"
  }
]

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-400 text-sm tracking-[0.3em] uppercase font-medium">Our Portfolio</span>
          <h2 className="mt-4 text-4xl md:text-7xl font-black" style={{ fontFamily: 'Playfair Display, serif' }}>
            Iconic <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Brands</span>
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the range of premium beverages that have become household names across Nigeria and West Africa.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative p-8 rounded-3xl border ${product.borderColor} ${product.bgColor} backdrop-blur-sm overflow-hidden h-full`}
        animate={isHovered ? { 
          rotateY: 5, 
          rotateX: -5, 
          scale: 1.02,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        } : { 
          rotateY: 0, 
          rotateX: 0, 
          scale: 1,
          boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)'
        }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20`}
          animate={isHovered ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0.2 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="text-5xl mb-4"
            animate={isHovered ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
          >
            {product.emoji}
          </motion.div>
          
          <h3 className={`text-2xl font-bold ${product.textColor}`}>{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{product.tagline}</p>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">{product.description}</p>
          
          <motion.div
            className="mt-6 flex items-center gap-2 text-sm font-medium"
            initial={{ opacity: 0, x: -10 }}
            animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
          >
            <span className={product.textColor}>Learn More</span>
            <motion.span
              className={product.textColor}
              animate={isHovered ? { x: 5 } : { x: 0 }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  )
}
