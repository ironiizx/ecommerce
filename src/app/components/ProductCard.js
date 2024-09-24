import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item }) => {
  return (
    <div className="col-span-3 flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={`/imgs/${item.image}`} 
          alt={item.name}
          width={0}
          height={0}
          sizes='100vw'
          style={{width: '80%', height: 'auto', margin: '0 auto'}}
          className="mx-auto"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      <p className="text-gray-600 mb-4">${item.price}</p> 
      <Link 
        href={`/product/${item._id}`} 
        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
      >
        Ver más
      </Link>
      
    </div>
  
  );
};

export default ProductCard;

