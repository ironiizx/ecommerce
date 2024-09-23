'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';

export default function Navbar() {
  const { cartLength } = useAppContext();
  return (
    <div className='flex justify-between items-center h-24 bg-black text-white px-10'>
      <div className='flex items-center'>
        <Link href={`/`}>
          <Image src={`/imgs/chevroletlogo.png`} width={100} height={100} alt='Logo' />
        </Link>
        <nav className='ml-10'>
          <ul className='flex gap-5'>
            <li>
              <Link href={`/`} className='font-bold relative group'>
                Home
                <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              </Link>
            </li>
            <li>
              <Link href={`/Vehicles`} className='font-bold relative group'>
                Vehicles
                <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              </Link>
            </li>
            <li>
              <Link href={`/Shop`} className='font-bold relative group'>
                Shop
                <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              </Link>
            </li>
            <li>
              <Link href={`/Contact`} className='font-bold relative group'>
                Contact
                <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Link href={`/cart`}>
        <div className='relative'>
          <FaCartShopping size={30} />
          {cartLength > 0 && (
            <span className='absolute top-5 left-5 flex items-center justify-center bg-black text-white rounded-full w-2 h-4 p-4 text-sm'>
              {cartLength}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
