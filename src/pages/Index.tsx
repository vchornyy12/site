import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'DevTogether - Advanced AI Assistants for Modern Businesses';
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
