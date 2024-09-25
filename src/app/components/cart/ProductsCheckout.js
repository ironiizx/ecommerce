"use client";
import Image from "next/image";
import { useAppContext } from "@/app/contexts/AppContext";

const ProductsChekout = () => {
  const { cart, cartTotal } = useAppContext();
  return (
    <div>
      <div>
        {cart.map(product => (
          <div key={product.id} className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Image
                src={`/imgs/${product.image}`}
                alt={product.name}
                width={100}
                height={100}
              />
              <h2>{`${product.name} x ${product.quantity}`}</h2>
            </div>
            <p>$ {product.price * product.quantity}</p>
          </div>
        ))}
      </div>
      <p className="text-3xl font-bold mt-4">Total: U$S {cartTotal()}</p>
    </div>
  );
};

export default ProductsChekout;