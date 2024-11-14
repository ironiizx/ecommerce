'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedSummary, setSelectedSummary] = useState(null); 

  const cartLength = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (name, price, image, id, quantity, model, color, interior) => {
    const product = {
      name,
      price,
      image,
      id,
      quantity,
      model,
      color,
      interior,
    };
  
    const existingProductIndex = cart.findIndex(
      (item) => item.id === id && item.image === image
    );
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveProduct = (id, image) => {
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
        selectedSummary,
        setSelectedSummary, 
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
