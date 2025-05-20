'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className='bg-black text-white'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-1 gap-8 items-center'>
        <div>
          <p className='uppercase text-sm mb-2'>
            A Showcase of Our Completed Projects
          </p>
          <h1 className='text-4xl font-bold leading-tight text-yellow-500'>
            Your Trusted Solution <br /> For Civil Engineering Projects
          </h1>
          <p className='mt-4 max-w-lg'>
            At BuildPro, we specialize in delivering high-quality civil
            engineering and heavy construction services, focusing on safety,
            precision, and reliability to bring your large-scale projects to
            life.
          </p>
          <div className='mt-6 flex space-x-4'>
            <button className='bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400'>
              Who We Are
            </button>
            <button className='bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200'>
              Our Services
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative'
        >
          <img
            src={dataSite.image_hero}
            alt='Engineering Team'
            className='rounded-lg w-full'
          />
          <div className='absolute bottom-4 left-4 bg-yellow-500 text-black px-4 py-2 rounded-md'>
            <span className='block font-bold text-xl'>50+</span>
            <span className='text-sm'>Satisfied Clients</span>
          </div>
          <div className='absolute bottom-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-md'>
            <span className='block font-bold text-xl'>99.5%</span>
            <span className='text-sm'>Project Success Rate</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
