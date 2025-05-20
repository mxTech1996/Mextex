'use client';
import { motion } from 'framer-motion';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';

const engineeringProjects = dataSite.products;
export default function EngineeringProjectsSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-sm font-semibold uppercase mb-2'>
          Stay Informed With Our Projects
        </h2>
        <h3 className='text-3xl font-bold mb-4'>
          Engineering News & Project Highlights
        </h3>
        <p className='text-gray-600 mb-8 max-w-2xl'>
          Explore our latest civil engineering and heavy construction solutions,
          tailored to meet the demands of infrastructure and industrial
          projects.
        </p>
        <div className='grid md:grid-cols-3 gap-8'>
          {engineeringProjects.map((project, index) => {
            const isInCart = validateProductInCart(project.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(project.id);
            };

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className='bg-gray-900 text-white rounded overflow-hidden shadow-lg'
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-56 object-cover'
                />
                <div className='p-4'>
                  <p className='text-sm text-gray-400'>$ {project.price}</p>
                  <h4 className='text-xl font-bold mt-2 mb-2'>
                    {project.name}
                  </h4>
                  <p className='text-gray-300 mb-4'>
                    {project.description.slice(0, 200)}...
                  </p>
                  <button
                    onClick={handleClick}
                    style={{
                      color: isInCart ? '#E64A4AFF' : '#FFD700',
                    }}
                    className='flex items-center text-yellow-400 hover:underline'
                  >
                    {isInCart ? (
                      <span className='text-sm'>Remove from Cart</span>
                    ) : (
                      <span className='text-sm'>Add to Cart</span>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
