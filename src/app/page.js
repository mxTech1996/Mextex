'use client';

import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import CivilEngineeringHighlight from '@/components/organisms/Highlight';
import KnowUsSection from '@/components/organisms/KnowUs';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import Services from '@/components/organisms/Services';
import TestimonialsCarousel from '@/components/organisms/Testimonial';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <KnowUsSection />
      <CivilEngineeringHighlight />
      <Products />
      <Services />
      <TestimonialsCarousel />
      <Footer />
    </main>
  );
}
