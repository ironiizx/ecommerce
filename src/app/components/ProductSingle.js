'use client';

import { useState } from "react";
import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";
import CustomizeProduct from "@/app/components/CustomizeProduct";
import { useAppContext } from "@/app/contexts/AppContext";

const ProductSingle = ({ product }) => {
  const { id, name, description, price, image } = product;
  const [showCustomize, setShowCustomize] = useState(false);
  const [hasCustomized, setHasCustomized] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    model: "LS",
    color: "Negro Mosaico Metálico",
    interior: "Cuero blanco",
    image,
  });

  const { handleAddToCart } = useAppContext();

  const handleCustomizeComplete = (options) => {
    setSelectedOptions(options); 
    setShowCustomize(false); 
    setHasCustomized(true); 
  };

  const addToCart = () => {
    handleAddToCart(
      name,
      price,
      selectedOptions.image,
      id,
      1,
      selectedOptions.model,
      selectedOptions.color,
      selectedOptions.interior
    );
  };

  return (
    <div className="py-40 pb-60">
      {!showCustomize ? (
        <div className="grid grid-cols-12 bg-white p-8">
          <div className="col-span-6 flex justify-center items-center">
            <Image
              src={`/imgs/${selectedOptions.image}`}
              width={650}
              height={600}
              alt={name}
              className=""
            />
          </div>

          <div className="col-span-6 flex flex-col items-start pl-8">
            <h1 className="text-3xl font-bold text-black mb-2">{name}</h1>
            <p className="text-xl font-bold text-black mb-4">{description}</p>
            <h3 className="text-3xl font-bold text-black mb-6">Precio estimado: ${price}</h3>

            {hasCustomized && (
              <div className="mt-8 p-4 border-t border-gray-200 text-lg">
                <h4 className="text-2xl font-semibold mb-4">Resumen final</h4>
                <p className="text-gray-700">Modelo: {selectedOptions.model}</p>
                <p className="text-gray-700">Color exterior: {selectedOptions.color}</p>
                <p className="text-gray-700">Interior: {selectedOptions.interior}</p>
              </div>
            )}

            <button
              onClick={addToCart}
              className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors text-lg mt-6"
            >
              Cotizar ahora!
            </button>

            {!hasCustomized && (
              <button
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors text-lg mt-4"
                onClick={() => setShowCustomize(true)}
              >
                Personalizar
              </button>
            )}
          </div>
        </div>
      ) : (
        <CustomizeProduct product={product} onComplete={handleCustomizeComplete} />
      )}
    </div>
  );
};

export default ProductSingle;
