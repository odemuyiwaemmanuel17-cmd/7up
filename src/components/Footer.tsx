import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="text-3xl font-black"
              style={{ fontFamily: 'Playfair Display, serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                7UP
              </span>
              <span className="text-white/60 text-sm ml-2 font-light">Bottling Company</span>
            </motion.div>
            <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
              Nigeria's premier aerated drinks supplier. Refreshing the nation since 1951 with iconic brands 
              loved by millions across West Africa.
            </p>
            <div className="mt-6 flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xs uppercase">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Products', 'Careers', 'News & Media', 'Sustainability'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-green-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-3">
              {['7UP', 'Pepsi', 'Mirinda', 'Aquafina', 'Super Commando', 'Teem'].map((brand) => (
                <li key={brand}>
                  <a href="#products" className="text-gray-500 hover:text-green-400 transition-colors text-sm">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Seven-Up Bottling Company Nigeria. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-center text-[15vw] font-black text-white/[0.02] leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
          7UP
        </div>
      </div>
    </footer>
  )
}
