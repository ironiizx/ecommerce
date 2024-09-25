import Inner from "@/app/components/Inner";
import ProductsCheckout from "@/app/components/cart/ProductsCheckout";
import FormCheckout from "@/app/components/cart/FormCheckout";

const Cart = () => {
  return (
    <section className="h-auto mt-12 mb-12 bg-gray-100 py-8">
      <Inner>
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">
          Carrito de Compras
        </h1>

        <div className="grid grid-cols-12 gap-8">
          {/* Sección de productos */}
          <div className="col-span-12 lg:col-span-7 bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Productos en el carrito
            </h2>
            <ProductsCheckout />
          </div>

          {/* Sección del formulario de Checkout */}
          <div className="col-span-12 lg:col-span-5 bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Información de Pago
            </h2>
            <FormCheckout />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Cart;
