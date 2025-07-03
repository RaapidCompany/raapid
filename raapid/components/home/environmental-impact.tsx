"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Heart, Zap } from "lucide-react"

export function EnvironmentalImpact() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Making a Real Impact</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every order creates a ripple effect of positive change in our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-amber-400" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2"
            >
              50K+
            </motion.div>
            <p className="text-gray-300 text-sm">Happy customers served</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-amber-400" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2"
            >
              40%
            </motion.div>
            <p className="text-gray-300 text-sm">Average sales increase</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-amber-400" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2"
            >
              $30+
            </motion.div>
            <p className="text-gray-300 text-sm">Average hourly earnings</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-amber-400" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-2"
            >
              100%
            </motion.div>
            <p className="text-gray-300 text-sm">Zero emission deliveries</p>
          </motion.div>
        </div>

        {/* Environmental Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4">🌱 Every Delivery Counts</h3>
            <p className="text-gray-300 leading-relaxed">
              By choosing Raapid, you&apos;re not just getting faster delivery - you&apos;re supporting local businesses, helping
              riders earn better wages, and contributing to a cleaner, more sustainable city.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
