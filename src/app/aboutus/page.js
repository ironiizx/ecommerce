import Image from 'next/image';

export default function AboutUs() {
  const aboutInfo = [
    {
      title: 'Innovación en Tecnología',
      description: 'Chevrolet se compromete a ser líder en la innovación automotriz, desarrollando vehículos equipados con las últimas tecnologías que mejoran la experiencia del conductor y la seguridad en la carretera.',
      image: '/imgs/innovacion.jpg',
    },
    {
      title: 'Compromiso Ambiental',
      description: 'La marca está enfocada en reducir su huella de carbono, fabricando vehículos eléctricos y eficientes en combustible, contribuyendo así a un futuro más sostenible.',
      image: '/imgs/ambiental.jpg',
    },
    {
      title: 'Diseño y Estilo',
      description: 'Chevrolet ofrece vehículos que no solo son funcionales, sino también atractivos, combinando estética y rendimiento para proporcionar una experiencia de conducción excepcional.',
      image: '/imgs/estilo.jpg',
    },
    {
      title: 'Calidad y Durabilidad',
      description: 'Cada vehículo Chevrolet es sometido a pruebas rigurosas para garantizar la calidad y la durabilidad, asegurando que nuestros clientes obtengan lo mejor en términos de rendimiento y confianza.',
      image: '/imgs/durabilidad.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Acerca de Chevrolet</h1>
      <p className="text-lg mb-8 text-center">
        Chevrolet es una marca icónica en la industria automotriz, conocida por su compromiso con la innovación, la sostenibilidad y la calidad. A través de nuestra tecnología avanzada y diseño atractivo, trabajamos para brindar a nuestros clientes vehículos que no solo son eficientes y seguros, sino que también son un placer de conducir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aboutInfo.map((item, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg h-[450px] flex flex-col">
            <div className="flex-grow mb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
