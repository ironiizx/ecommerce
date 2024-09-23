import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { getAllProducts, getAllProductsDB } from '@/app/actions';

export default async function ProductsGrid() {
  const response = await getAllProductsDB();

  return (
    <section>
      <Inner>
        <h2 className='text-4xl font-bold text-center mt-16 mb-8'>Nuestros vehículos</h2>
        <div className='grid grid-cols-12 gap-4'>
          {response.products && response.products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </Inner>
    </section>
  );
}
