'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  const handleAddToCart = (name, price, image, quantity) => {
    const product = {
      name,
      price,
      image,
      quantity,
    };
    setState([...cart, product]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        cartLength,
        handleAddToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;
