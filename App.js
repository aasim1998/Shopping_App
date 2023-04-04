import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyTabs from './src/components/TabNavigator';
import CartContextProvider from './src/components/context/CartContext';

const App = () => {
  return (
    <NavigationContainer>
      <CartContextProvider>
        <MyTabs />
      </CartContextProvider>
    </NavigationContainer>
  );
};

export default App;
