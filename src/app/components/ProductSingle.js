"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AddToCart from "./AddToCart";

const ProductSingle = ({ product }) => {
  const { image, name, price } = product;
  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="col-span-6 flex justify-center items-center">
          <Image
          src={`/imgs/products/${image}`}
          width={500}
          height={500}
          alt={name}
          />
        </div>
        <div className="col-span-6 flex">
          <h1>{name}</h1>
          <p>Description</p>
          <h3>{price}</h3>
          <AddToCart price={price} name={price} image={price} />
        </div>
      </div>
    </section>

  );
};

export default ProductSingle;
