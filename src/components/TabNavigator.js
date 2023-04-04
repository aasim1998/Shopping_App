import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Cart from './cart';

const Tab = createMaterialBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      activeColor="#ffffff"
      barStyle={{backgroundColor: 'blue'}}>
      <Tab.Screen
        name="Products"
        component={Home}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color}) => {
            <MaterialCommunityIcons name="home" color={color} size={26} />;
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => {
            <MaterialCommunityIcons name="cart" color={color} size={26} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
