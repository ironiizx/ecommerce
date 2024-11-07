import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-white p-4 rounded-lg flex flex-col items-center cursor-pointer ${
        isSelected ? 'border-4 border-yellow-500' : ''
      }`}
    >
      <h3 className="text-center text-lg font-semibold">{item.name}</h3>
      <div className="w-full h-48 relative mb-4 flex justify-center">
        <Image
          src={`/imgs/${item.image}`}
          alt={item.name}
          width={150}
          height={90}
          style={{ objectFit: 'contain' }}
        />
      </div>

    </div>
  );
};

export default ProductCard;
