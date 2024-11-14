'use client';

import { useState } from "react";
import Image from "next/image";

const CustomizeProduct = ({ product, onComplete }) => {
  const customizationOptions = product.customizationOptions;
  const [selectedTab, setSelectedTab] = useState("model");
  const [model, setModel] = useState(null);
  const [color, setColor] = useState(null);
  const [interior, setInterior] = useState(null);
  const [showFinalSummary, setShowFinalSummary] = useState(false);

  const colorToImageMap = {
    "Blanco Summit": "blanco.png",
    "Negro Mosaico Metálico": "negro.png",
    "Rojo Garnet Tintcoat": "rojo.png",
    "Azul Riverside": "azul.png",
    "Amarillo Shock": "amarillo.png",
    "Naranja Crush": "naranja.png",
  };

  const interiorToImageMap = {
    "Cuero blanco": "cuero_blanco2.png",
    "Cuero rojo": "cuero_rojo1.png",
  };

  const selectedImage = showFinalSummary
    ? `/imgs/${colorToImageMap[color || "Negro Mosaico Metálico"]}`
    : selectedTab === "interior" && interior
    ? `/imgs/${interiorToImageMap[interior]}`
    : `/imgs/${colorToImageMap[color || "Negro Mosaico Metálico"]}`;

  const handleFinalizeCustomization = () => {
    onComplete({
      model,
      color,
      interior,
      image: colorToImageMap[color || "Negro Mosaico Metálico"],
    });
  };

  if (!customizationOptions) {
    return <p>No hay opciones para este producto</p>;
  }

  const renderOptions = () => {
    if (selectedTab === "model") {
      return (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Modelo</h3>
          <div className="flex gap-4">
            {customizationOptions.modelOptions.map((option) => (
              <button
                key={option.name}
                className={`px-6 py-3 text-lg border-4 rounded-lg ${
                  model === option.name ? "bg-yellow-400 text-black border-yellow-400" : "bg-transparent border-yellow-400"
                }`}
                onClick={() => setModel(option.name)}
              >
                {option.name}
              </button>
            ))}
          </div>
          {model && <p className="mt-4 text-lg text-gray-600">{customizationOptions.modelOptions.find((m) => m.name === model)?.description}</p>}
        </div>
      );
    } else if (selectedTab === "color") {
      return (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Color Exterior</h3>
          <div className="flex gap-4">
            {customizationOptions.colorOptions.map((colorOption) => (
              <button
                key={colorOption.name}
                className={`w-16 h-16 rounded-full border-4 ${
                  color === colorOption.name ? "border-yellow-400" : "border-gray-400"
                }`}
                onClick={() => setColor(colorOption.name)}
              >
                <Image src={`/imgs/${colorOption.image}`} alt={colorOption.name} width={64} height={64} className="rounded-full" />
              </button>
            ))}
          </div>
        </div>
      );
    } else if (selectedTab === "interior") {
      return (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Interior</h3>
          <div className="flex gap-4">
            {customizationOptions.interiorOptions.map((interiorOption) => (
              <button
                key={interiorOption.name}
                className={`w-16 h-16 rounded-full border-4 ${
                  interior === interiorOption.name ? "border-yellow-400" : "border-gray-400"
                }`}
                onClick={() => setInterior(interiorOption.name)}
              >
                <Image src={`/imgs/${interiorOption.image}`} alt={interiorOption.name} width={64} height={64} className="rounded-full" />
              </button>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="customization-container p-5 flex pb-60">
      <div className="w-1/2 flex justify-center items-center">
        <Image src={selectedImage} alt={product.name} width={850} height={200} />
      </div>

      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-bold mb-6">{product.name}</h2>

        {showFinalSummary ? (
          <div>
            <div className="mt-8 p-4 border-t border-gray-200 text-lg">
              <h4 className="text-2xl font-semibold mb-4">Resumen final</h4>
              <p className="text-gray-700">Modelo: {model || "No seleccionado"}</p>
              <p className="text-gray-700">Color exterior: {color || "No seleccionado"}</p>
              <p className="text-gray-700">Interior: {interior || "No seleccionado"}</p>
              <p className="text-lg mt-4 text-gray-600">{product.description}</p>
              <div className="flex gap-4 mt-6">
                <button
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition-colors"
                  onClick={handleFinalizeCustomization}
                >
                  Finalizar personalización
                </button>
                <button
                  className="bg-gray-300 text-black py-3 px-6 rounded-lg text-lg hover:bg-gray-400 transition-colors"
                  onClick={() => setShowFinalSummary(false)}
                >
                  Volver
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex gap-8 mb-6 relative text-xl font-semibold">
              <button
                onClick={() => setSelectedTab("model")}
                className={`font-bold ${selectedTab === "model" ? "text-black" : "text-gray-600"}`}
              >
                Modelo
              </button>
              <button
                onClick={() => setSelectedTab("color")}
                className={`font-bold ${selectedTab === "color" ? "text-black" : "text-gray-600"}`}
              >
                Exterior
              </button>
              <button
                onClick={() => setSelectedTab("interior")}
                className={`font-bold ${selectedTab === "interior" ? "text-black" : "text-gray-600"}`}
              >
                Interior
              </button>
              <div
                className="absolute bottom-0 h-1 bg-yellow-500 transition-all duration-300"
                style={{
                  width: "80px",
                  transform: `translateX(${
                    selectedTab === "model" ? "0px" : selectedTab === "color" ? "105px" : "210px"
                  })`,
                }}
              />
            </div>

            {renderOptions()}

            <div className="mt-8 p-4 border-t border-gray-200 text-lg">
              <h4 className="text-xl font-semibold">Resumen de selección</h4>
              {model && <p className="text-gray-700">Modelo seleccionado: {model}</p>}
              {color && <p className="text-gray-700">Color exterior: {color}</p>}
              {interior && <p className="text-gray-700">Interior: {interior}</p>}
            </div>

            <button
              className="bg-blue-500 text-white py-3 px-6 rounded mt-6 text-lg hover:bg-blue-600 transition-colors"
              onClick={() => setShowFinalSummary(true)}
            >
              Cumplí tu sueño
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomizeProduct;
