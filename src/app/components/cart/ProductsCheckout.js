'use client';

import { useAppContext } from '@/app/contexts/AppContext';
import Image from 'next/image';

const ProductsCheckout = () => {
  const { cart, cartTotal } = useAppContext();

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} className="flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src={product.image} 
              alt={product.name} 
              className="w-10 h-10 object-cover rounded-full" 
              width={100} 
              height={100} 
            />
            <h3 className="ml-2">{product.name}</h3>
          </div>
          <p>{product.price}</p>
        </div>
      ))}
      <p>Total: {cartTotal()}</p>
    </div>
  );
};

export default ProductsCheckout;
