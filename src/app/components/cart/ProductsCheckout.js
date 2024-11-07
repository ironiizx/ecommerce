'use client';

import Image from "next/image";
import { useAppContext } from "@/app/contexts/AppContext";

const ProductsCheckout = () => {
  const { cart } = useAppContext();

  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      {cart.map((product) => (
        <div key={product.id} className="flex flex-col items-start mb-6">
          {/* Imagen del vehículo en su último color seleccionado */}
          <div className="flex justify-center w-full mb-6">
            <Image
              src={`/imgs/${product.image}`}
              alt={product.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Resumen de selección */}
          <div className="text-left w-full">
            <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
            <p className="text-xl mb-2"><span className="font-semibold">Modelo:</span> {product.model}</p>
            <p className="text-xl mb-2"><span className="font-semibold">Color exterior:</span> {product.color}</p>
            <p className="text-xl mb-2"><span className="font-semibold">Interior:</span> {product.interior}</p>
            <p className="text-xl font-semibold mt-4">Precio estimado: U$S {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCheckout;
