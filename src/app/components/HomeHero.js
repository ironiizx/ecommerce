'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomeHero = () => {
  const images = [
    '/imgs/banner.jpg',
    '/imgs/banner2.jpg',
    '/imgs/banner3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className='relative overflow-hidden'>
      <div
        className={`transition-opacity duration-1000 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={images[currentIndex]}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
          alt='hero'
        />
      </div>

      <button
        onClick={handlePrev}
        className='absolute left-5 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full'>
        <FaArrowLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className='absolute right-5 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full'>
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default HomeHero;
