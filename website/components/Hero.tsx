'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowRight, 
  Play, 
  Zap, 
  Star,
  Sparkles,
  Home,
  Shield,
  Brain
} from 'lucide-react'

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    { icon: Brain, text: 'AI-Powered Matching' },
    { icon: Shield, text: 'Blockchain Security' },
    { icon: Home, text: 'Smart Home Integration' },
  ]

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue text-sm font-medium mb-4">
                  <Zap className="inline w-4 h-4 mr-2" />
                  Next-Generation Real Estate
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Experience the <span className="text-gradient">Future</span> of Real Estate
              </h1>

              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-2xl">
                Discover your dream home with AI-powered matching, immersive virtual reality tours, 
                and smart home integration. The future of real estate is here.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
                  >
                    <feature.icon className="h-4 w-4 text-neon-blue" />
                    <span className="text-white/80 text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="group flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-8"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue">10K+</div>
                  <div className="text-white/60 text-sm">Properties Listed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">5K+</div>
                  <div className="text-white/60 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green">99%</div>
                  <div className="text-white/60 text-sm">Satisfaction Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl overflow-hidden">
                {/* 3D House Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 bg-gradient-to-br from-neon-blue/30 to-neon-purple/30 rounded-lg transform-gpu"
                    style={{
                      background: `
                        linear-gradient(45deg, rgba(0,212,255,0.3) 0%, rgba(139,92,246,0.3) 100%),
                        linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(139,92,246,0.1) 100%)
                      `,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="absolute inset-4 bg-black/20 rounded-lg flex items-center justify-center">
                      <Home className="w-16 h-16 text-neon-blue" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 left-10 w-8 h-8 bg-neon-blue/50 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 right-10 w-6 h-6 bg-neon-purple/50 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 right-10 w-4 h-4 bg-neon-green/50 rounded-full blur-sm"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

