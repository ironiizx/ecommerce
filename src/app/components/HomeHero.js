'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const HomeHero = () => {
  const images = [
    '/imgs/banner5.jpg',
    '/imgs/banner6.jpg',
    '/imgs/banner7.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
          style={{ width: '1920px', height: '920px' }}
          alt='hero'
        />
      </div>
    </div>
  );
};

export default HomeHero;
