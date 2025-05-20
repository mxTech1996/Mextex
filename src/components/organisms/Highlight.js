'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function CivilEngineeringHighlight() {
  const url = dataSite.image_hero2;
  return (
    <section
      id='about'
      className='relative bg-cover bg-center bg-no-repeat text-white'
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className='bg-black/60 w-full h-full flex items-center justify-start px-8 py-20'>
        <div className='max-w-2xl'>
          <p className='uppercase tracking-widest text-yellow-400 text-sm mb-4'>
            A Showcase of Our Completed Projects
          </p>
          <h2 className='text-4xl font-bold mb-4 leading-tight'>
            Our Expertise Proven on the Ground: <br />
            Explore Our Heavy Construction Achievements
          </h2>
          <p className='text-gray-200 mb-6'>
            At BuildPro Engineering, we specialize in delivering large-scale
            civil engineering and heavy construction solutions. Our dedicated
            team of professionals ensures every project meets the highest
            standards of safety, durability, and client satisfaction. From
            highways to industrial complexes, we’ve got you covered.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href='#projects'
            className='inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg'
          >
            View Completed Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
}
