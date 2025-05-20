import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section
      id='testimonials'
      className='bg-[#1c1c1c] text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10 relative overflow-hidden'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className='flex flex-col md:flex-row items-center gap-10'
        >
          <img
            src={dataSite.image_hero2}
            alt={testimonials[index].name}
            className='w-full max-w-md rounded-lg'
          />
          <div className='max-w-xl space-y-4'>
            <p className='uppercase text-yellow-500 text-sm tracking-widest'>
              Testimonials
            </p>
            <blockquote className='text-2xl italic leading-relaxed'>
              &quot;{testimonials[index].description}&quot;
            </blockquote>
            <div className='flex items-center gap-2 mt-4'>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className='text-yellow-500' />
              ))}
            </div>
            <p className='font-semibold mt-2'>{testimonials[index].name}</p>
            {/* <p className='text-gray-400 text-sm'>{testimonials[index].role}</p> */}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className='flex gap-4 mt-6 absolute bottom-6 md:static'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handlePrev}
          className='w-10 h-10 flex items-center justify-center border border-white rounded-full'
        >
          <FaArrowLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleNext}
          className='w-10 h-10 flex items-center justify-center border border-white rounded-full'
        >
          <FaArrowRight />
        </motion.button>
      </div>
    </section>
  );
}
