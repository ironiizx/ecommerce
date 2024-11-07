'use client';

import { useState } from "react";
import Image from "next/image";

const CustomizeProduct = ({ product, onComplete }) => {
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

  const modelOptions = [
    { name: "LS", description: "Motor 2.0L Turbo de 275 hp." },
    { name: "LT", description: "Más equipado que el LS." },
    { name: "SS", description: "Motor V8 de 6.2L con 455 hp." },
    { name: "ZL1", description: "Potente motor supercargado V8." },
  ];

  const colorOptions = [
    { name: "Blanco Summit", image: "/imgs/blanco_summit.png" },
    { name: "Negro Mosaico Metálico", image: "/imgs/negro_mosaico_metalico.png" },
    { name: "Rojo Garnet Tintcoat", image: "/imgs/rojo_garnet_tintcoat.png" },
    { name: "Azul Riverside", image: "/imgs/azul_riverside.png" },
    { name: "Amarillo Shock", image: "/imgs/amarillo_shock.png" },
    { name: "Naranja Crush", image: "/imgs/naranja_crush.png" },
  ];

  const interiorOptions = [
    { name: "Cuero blanco", image: "/imgs/cuero_blanco.png" },
    { name: "Cuero rojo", image: "/imgs/cuero_rojo.png" },
  ];

  // Imagen del vehículo según el color seleccionado o imagen del interior si está seleccionado
  const selectedVehicleImage = selectedTab === "interior" 
    ? interior 
      ? interiorOptions.find(opt => opt.name === interior)?.image 
      : null
    : `/imgs/${colorToImageMap[color || "Negro Mosaico Metálico"]}`;

  const renderOptions = () => {
    if (selectedTab === "model") {
      return (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Modelo</h3>
          <div className="flex gap-4">
            {modelOptions.map((option) => (
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
          {model && <p className="mt-4 text-lg text-gray-600">{modelOptions.find((m) => m.name === model)?.description}</p>}
        </div>
      );
    } else if (selectedTab === "color") {
      return (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Color Exterior</h3>
          <div className="flex gap-4">
            {colorOptions.map((colorOption) => (
              <button
                key={colorOption.name}
                className={`w-16 h-16 rounded-full border-4 ${
                  color === colorOption.name ? "border-yellow-400" : "border-gray-400"
                }`}
                onClick={() => setColor(colorOption.name)}
              >
                <Image src={colorOption.image} alt={colorOption.name} width={64} height={64} className="rounded-full" />
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
            {interiorOptions.map((interiorOption) => (
              <button
                key={interiorOption.name}
                className={`w-16 h-16 rounded-full border-4 ${
                  interior === interiorOption.name ? "border-yellow-400" : "border-gray-400"
                }`}
                onClick={() => setInterior(interiorOption.name)}
              >
                <Image src={interiorOption.image} alt={interiorOption.name} width={64} height={64} className="rounded-full" />
              </button>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="customization-container p-4 flex pb-60"> {/* Agregar padding-bottom aquí */}
      {/* Imagen del Vehículo o Interior */}
      <div className="w-1/2 flex justify-center items-center">
        {selectedVehicleImage ? (
          <Image src={selectedVehicleImage} alt={product.name} width={500} height={500} />
        ) : (
          <p className="text-center text-gray-500">Seleccione un color o un interior</p>
        )}
      </div>

      {/* Sección de Personalización o Resumen Final */}
      <div className="w-1/2 pl-8">
        <h2 className="text-3xl font-bold mb-6">{product.name}</h2>

        {showFinalSummary ? (
          <div>
            {/* Resumen final */}
            <div className="mt-8 p-4 border-t border-gray-200 text-lg">
              <h4 className="text-2xl font-semibold mb-4">Resumen final</h4>
              <p className="text-gray-700">Modelo: {model || "No seleccionado"}</p>
              <p className="text-gray-700">Color exterior: {color || "No seleccionado"}</p>
              <p className="text-gray-700">Interior: {interior || "No seleccionado"}</p>
              <p className="text-lg mt-4 text-gray-600">{product.description}</p>
              <div className="flex gap-4 mt-6">
                <button
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition-colors"
                  onClick={() => onComplete({ model, color, interior, image: colorToImageMap[color || "Negro Mosaico Metálico"] })}
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
            {/* Menú de opciones con subrayado dinámico */}
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

            {/* Opciones de Personalización */}
            {renderOptions()}

            {/* Resumen de selección durante la elección */}
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
