import Image from "next/image";
import AddToCart from "@/app/components/AddToCart";

const ProductSingle = ({ product }) => {
  const { id, name, author, editorial, description, price, stock, image } = product;

  return (
    <>
      <section className="py-20">
        <div className="grid grid-cols-12 bg-white p-8">

          <div className="col-span-6 flex justify-center items-center">
            <Image
              className="shadow-lg"
              src={`/imgs/${image}`}
              width={600}
              height={600}
              alt={name}
            />
          </div>

          <div className="col-span-6 flex flex-col items-start pl-8">
            <h1 className="text-2xl font-bold text-black mb-2">
              Nombre: <span className="font-normal">{name}</span>
            </h1>
            <p className="text-xl font-bold text-black mb-4">
              Descripción: <span className="font-normal">{description}</span>
            </p>

            <h3 className="text-3xl font-bold text-black mb-6">
              Precio: <span className="text-4xl">${price}</span>
            </h3>

            <AddToCart
              name={name}
              image={image}
              price={price}
              id={id}
              className="bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors text-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSingle;
