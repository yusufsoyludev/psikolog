import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import StorySection from '../components/StorySection'
import ServicesSection from '../components/ServicesSection'
import WhyTherapySection from '../components/WhyTherapySection'
import TestimonialsSection from '../components/TestimonialsSection'
import SessionOptionsSection from '../components/SessionOptionsSection'
import FAQSection from '../components/FAQSection'

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <WhyTherapySection />
      <TestimonialsSection />
      <SessionOptionsSection />
      <FAQSection />
    </motion.main>
  )
}

export default Home