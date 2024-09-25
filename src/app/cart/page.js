import Inner from "@/app/components/Inner";
import ProductsChekOut from "@/app/components/cart/ProductsChekOut";
import FormCheckout from "@/app/components/cart/FormCheckout";

const Cart = () => {
  return (
    <section className='h-screen mt-32'>
      <h1 className='bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors'>Cart</h1>
      <Inner>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 lg:col-span-6 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors'>
            <FormCheckout />
          </div>
          <div className='col-span-12 lg:col-span-6 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors'>
            <ProductsChekOut />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Cart;