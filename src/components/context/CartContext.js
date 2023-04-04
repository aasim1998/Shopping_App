import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from 'react';

const cartContext = createContext(null);

export const useCartContext = () => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error('CartContext should be within CartContextProvider');
  }
  return context;
};

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCartHandler = useCallback(
    item => {
      const oldCart = [...cart];
      const newCart = oldCart.concat(item);
      setCart(newCart);
    },
    [cart],
  );

  const removeFromCartHandler = useCallback(
    item => {
      const oldCart = [...cart];
      const newCart = oldCart.filter(loopItem => item.id !== loopItem.id);
      setCart(newCart);
    },
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      addToCartHandler,
      removeFromCartHandler,
    }),
    [cart, addToCartHandler, removeFromCartHandler],
  );

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
