"use client";
import Image from "next/image";
import { useAppContext } from "@/app/contexts/AppContext";

const ProductsChekOut = () => {
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
      <p>Total: $ {cartTotal()}</p>
    </div>
  );
};

export default ProductsChekOut;