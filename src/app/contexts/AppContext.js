'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Sumamos la cantidad total de productos en el carrito
  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (name, price, image, id, quantity) => {
    const product = {
      name,
      price,
      image,
      id,
      quantity,
    };

    // Buscar si el producto ya está en el carrito basado en el ID y la imagen
    const existingProductIndex = cart.findIndex(
      (item) => item.id === id && item.image === image
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Si no está en el carrito, agregarlo como nuevo
      setCart([...cart, product]);
    }
  };

  const handleRemoveProduct = (id, image) => {
    // Eliminar el producto basado en id y imagen
    const updatedCart = cart.filter((item) => item.id !== id || item.image !== image);
    setCart(updatedCart);
  };

  const cartTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
        handleRemoveProduct,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext debe ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
