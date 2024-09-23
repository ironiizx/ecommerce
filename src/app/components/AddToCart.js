"use client";
import React from "react";
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({ name, price, image }) => {
  const { handleAddToCart } = useAppContext();

  if (!name || !price || !image) {
    console.error("Missing product data:", { name, price, image });
    return null;
  }

  return (
    <button
      onClick={() => handleAddToCart(name, price, image, 1)}
      className="btn"
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
