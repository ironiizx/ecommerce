import Inner from "@/app/components/Inner";
import ProductsCheckout from "@/app/components/cart/ProductsCheckout";
import CartForm from "../components/CartForm/CartForm";

const Cart = () => {
  return (
    <section className="h-auto mt-12 mb-12 py-12 pb-40 bg-white">
      <Inner>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Vehículo a Cotizar
            </h2>
            <ProductsCheckout />
          </div>

          <div className="col-span-12 lg:col-span-5 bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Información para cotización
            </h2>
            <CartForm />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Cart;
