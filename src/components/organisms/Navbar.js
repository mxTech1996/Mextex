'use client';
import { dataSite } from '@/data';
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function StickyTechnicianNavbar() {
  return (
    <header className='sticky top-0 z-50'>
      {/* Top Bar */}
      <div className='flex justify-between items-center bg-yellow-500 text-black px-6 py-2 text-sm'>
        <div className='flex items-center space-x-4'>
          <span className='flex items-center'>
            <FaPhoneAlt className='mr-1' /> + {dataSite.telephone}
          </span>
          <span className='flex items-center'>
            <FaEnvelope className='mr-1' /> {dataSite.email}
          </span>
          <span className='flex items-center'>
            <FaMapMarkerAlt className='mr-1' /> {dataSite.address}
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className='flex justify-between items-center bg-black text-white px-6 py-4'>
        <div className='flex items-center space-x-2'>
          <img
            src={dataSite.iconImage}
            alt='Technician Logo'
            className='w-20 h-20'
          />
          <span className='font-bold text-xl'>Mextex</span>
        </div>

        <ul className='flex space-x-6 font-medium'>
          <li>
            <a href='/#products'>Products</a>
          </li>
          <li>
            <a href='/#testimonials'>Testimonials</a>
          </li>
          <li>
            <a href='/#services'>Services</a>
          </li>
          <li>
            <a href='/#about'>Know Us</a>
          </li>
        </ul>

        <button
          onClick={() => (window.location.href = '/my-cart')}
          className='bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition'
        >
          Go to Cart
        </button>
      </nav>
    </header>
  );
}
