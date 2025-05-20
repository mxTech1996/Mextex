import {
  FaRoad,
  FaBuilding,
  FaTools,
  FaWater,
  FaMountain,
  FaHardHat,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function KnowUsSection() {
  const services = [
    {
      icon: <FaRoad className='text-4xl text-yellow-500' />,
      title: 'Road and Highway Construction',
      description:
        'Expertly designed and constructed roads and highways ensuring durability and long-term efficiency.',
    },
    {
      icon: <FaBuilding className='text-4xl text-yellow-500' />,
      title: 'Industrial Building Structures',
      description:
        'Engineering solutions for industrial plants, factories, and large-scale commercial facilities.',
    },
    {
      icon: <FaTools className='text-4xl text-yellow-500' />,
      title: 'Heavy Equipment Installation',
      description:
        'Safe and precise installation of heavy machinery for industrial and construction operations.',
    },
    {
      icon: <FaWater className='text-4xl text-yellow-500' />,
      title: 'Water Management Systems',
      description:
        'Design and execution of drainage, wastewater, and water supply systems for civil projects.',
    },
    {
      icon: <FaMountain className='text-4xl text-yellow-500' />,
      title: 'Earthworks and Excavations',
      description:
        'Land preparation services including grading, excavation, and stabilization for heavy construction.',
    },
    {
      icon: <FaHardHat className='text-4xl text-yellow-500' />,
      title: 'Structural Reinforcement',
      description:
        'Strengthening of bridges, tunnels, and large structures for enhanced safety and longevity.',
    },
  ];

  return (
    <section id='about' className='py-16 bg-white text-center'>
      <div className='max-w-7xl mx-auto px-6'>
        <p className='uppercase tracking-widest text-gray-500 text-sm mb-2'>
          Top Civil Engineering Services
        </p>
        <h2 className='text-3xl font-bold mb-4'>
          Comprehensive Civil & Heavy Construction <br /> Services Tailored to
          Your Needs
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto mb-10'>
          We specialize in delivering large-scale civil engineering solutions
          with a focus on safety, efficiency, and long-term reliability. Trust
          BuildPro for your most ambitious construction projects.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className='border p-6 rounded-lg shadow-md text-left flex flex-col items-center'
            >
              {service.icon}
              <h3 className='mt-4 text-xl font-semibold text-center'>
                {service.title}
              </h3>
              <p className='mt-2 text-gray-600 text-center'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
