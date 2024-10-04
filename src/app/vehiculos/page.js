import Image from 'next/image';

export default function Vehiculos() {
  const cars = [
    {
      name: 'Chevrolet Camaro',
      image: '/imgs/camaro2.jpg',
      description: 'El Chevrolet Camaro es un automóvil deportivo icónico que ha capturado la atención de entusiastas del automovilismo desde su lanzamiento en 1966. Diseñado como un competidor directo del Ford Mustang, el Camaro rápidamente se estableció como un símbolo de potencia, estilo y rendimiento en la carretera. Desde su inicio, el Camaro ha sido conocido por su diseño agresivo y musculoso, con líneas aerodinámicas que le otorgan un aspecto distintivo y dinámico. Su parrilla frontal ancha y los faros alargados no solo mejoran su estética, sino que también contribuyen a una mejor visibilidad y aerodinámica. A lo largo de los años, el Camaro ha pasado por varias generaciones, cada una con mejoras en tecnología, rendimiento y eficiencia, sin perder su esencia deportiva.',
    },
    {
      name: 'Chevrolet Corvette',
      image: '/imgs/corvette1.jpg',
      description: 'El Chevrolet Corvette es un automóvil deportivo de alto rendimiento que ha sido un símbolo de potencia y diseño estadounidense desde 1953.',
    },
    {
      name: 'Chevrolet Silverado',
      image: '/imgs/silberado.jpg',
      description: 'La Chevrolet Silverado es una de las camionetas más vendidas en los Estados Unidos, famosa por su durabilidad y fuerza.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 p-4 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Historia de Chevrolet</h1>
        <p>
          Chevrolet, también conocida como Chevy, es una marca de automóviles fundada en 1911 por Louis Chevrolet y William C. Durant. A lo largo de su historia, Chevrolet ha producido algunos de los autos más icónicos y ha jugado un papel clave en la cultura automotriz estadounidense.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-4 shadow-lg rounded-lg">
          <div className="mb-4">
            <Image
              src={cars[0].image}
              alt={cars[0].name}
              width={600} 
              height={400}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">{cars[0].name}</h2>
          <p>{cars[0].description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="mb-4">
              <Image
                src={cars[1].image}
                alt={cars[1].name}
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{cars[1].name}</h2>
            <p>{cars[1].description}</p>
          </div>

          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="mb-4">
              <Image
                src={cars[2].image}
                alt={cars[2].name}
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{cars[2].name}</h2>
            <p>{cars[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
