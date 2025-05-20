import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const services = dataSite.services;

export default function CivilEngineeringServicesSection() {
  return (
    <section id='services' className='py-16 bg-white max-w-7xl mx-auto px-4'>
      <h2 className='text-3xl font-bold mb-4 text-center'>
        Civil Engineering & Heavy Construction Services
      </h2>
      <p className='text-gray-600 mb-12 text-center max-w-2xl mx-auto'>
        Providing end-to-end construction solutions for industrial, government,
        and large-scale infrastructure projects.
      </p>

      <div className='grid md:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className='bg-white border border-gray-100 rounded overflow-hidden shadow-sm'
          >
            <img
              src={service.image}
              alt={service.title}
              className='w-full h-48 object-cover'
            />
            <div className='relative bg-white p-4 border-t-4 border-yellow-500'>
              {/* <div className='flex items-center space-x-2 mb-2 text-yellow-500'>
                {service.icon}
              </div> */}
              <h3 className='text-lg font-bold mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
