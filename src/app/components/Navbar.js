'use client';
import { useAppContext } from '@/app/contexts/AppContext';
import Link from 'next/link';
import Image from 'next/image';
import { FaCartShopping } from 'react-icons/fa6';
import ProductsGrid from '@/app/components/ProductsGrid';
import { useState } from 'react';

export default function Navbar() {
  const { cartLength } = useAppContext();
  const [showVehicles, setShowVehicles] = useState(false);
  const [vehicleQuoted, setVehicleQuoted] = useState(false); // Estado para la alerta
  let timer; // Variable para el temporizador

  const handleVehiclesHover = () => {
    clearTimeout(timer); // Limpia el temporizador si está activo
    setShowVehicles(true);
  };

  const handleVehiclesLeave = () => {
    // Inicia un temporizador para cerrar el menú después de un breve período
    timer = setTimeout(() => {
      setShowVehicles(false);
    }, 200); // Puedes ajustar el tiempo en milisegundos (por ejemplo, 300ms)
  };

  // Función para mostrar la alerta de vehículo cotizado
  const handleQuoteAlert = () => {
    setVehicleQuoted(true);
    setTimeout(() => {
      setVehicleQuoted(false); // Ocultar la alerta después de un tiempo
    }, 3000); // La alerta se oculta después de 3 segundos
  };

  return (
    <div className='flex justify-between items-center h-24 bg-black text-white px-10'>
      <div className='flex items-center'>
        <Link href={`/`}>
          <Image src={`/imgs/chevroletlogo.png`} width={100} height={100} alt='Logo' />
        </Link>
        <nav className='ml-10 relative'>
          <ul className='flex gap-5'>
            <li>
              <Link href={`/`} className='font-bold relative group'>
                Home
                <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              </Link>
            </li>
            <li
              onMouseEnter={handleVehiclesHover}
              onMouseLeave={handleVehiclesLeave}
              className='relative font-bold cursor-pointer'
            >
              <span>Vehicles</span>
              <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              <div
                className={`absolute top-full left-0 mt-2 w-[1400px] bg-white text-black rounded-lg shadow-lg z-20 pl-10 transition-all duration-250 ease-out transform ${
                  showVehicles ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}
                onMouseEnter={handleVehiclesHover} // Mantener abierto cuando el mouse está dentro del menú
                onMouseLeave={handleVehiclesLeave} // Cerrar cuando el mouse sale del menú
              >
                <ProductsGrid onQuote={handleQuoteAlert} /> {/* Pasa la función al ProductsGrid */}
              </div>
            </li>
            <li>
              <Link href={`/aboutus`} className='font-bold relative group'>
                About us
                <span className='block h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left'></span>
              </Link>
            </li>
            <li>
              <Link href={`/contact`} className='font-bold relative group'>
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
          {/* Alerta de vehículo cotizado */}
          {vehicleQuoted && (
            <span className='absolute top-0 left-10 bg-yellow-500 text-black p-2 rounded-lg transition-opacity duration-300'>
              Vehículo cotizado!
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
