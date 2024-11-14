'use client';

import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductsGrid({ onCotizaClick }) {
  const [products, setProducts] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleVehicleSelect = (id) => {
    setSelectedVehicle(id);
  };

  return (
    <section className="mb-16 pt-10">
      <Inner>
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-2 bg-white p-6 rounded-lg">
            <h2 className="text-4xl font-bold mb-2">All the Vehicles</h2>
            <ul className="text-3xl font-semibold space-y-2"> 
              <li>Electric</li>
              <li>SUV</li>
              <li>Trucks</li>
              <li>Cars</li>
            </ul>

            <p className="mt-8 text-gray-600">Find a dealer</p>
            <Link href={selectedVehicle ? `/product/${selectedVehicle}` : "#"}>
              <button
                className={`mt-4 py-2 px-3 rounded-lg font-semibold transition-colors ${
                  selectedVehicle
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                    : 'bg-gray-200 text-gray-800 cursor-not-allowed'
                }`}
                disabled={!selectedVehicle}
                onClick={onCotizaClick} 
              >
                Cotizá ahora!
              </button>
            </Link>
          </div>

          <div className="col-span-9 grid grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
                isSelected={selectedVehicle === item._id}
                onSelect={() => handleVehicleSelect(item._id)}
              />
            ))}
          </div>
        </div>
      </Inner>
    </section>
  );
}
