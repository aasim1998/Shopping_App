import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useCartContext} from './context/CartContext';

const Cart = ({navigation}) => {
  const {cart, removeFromCartHandler} = useCartContext();

  const renderItem = ({item}) => (
    <View style={styles.wrapper}>
      <View style={styles.buttonWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: item.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => removeFromCartHandler(item)}>
            <Text style={styles.addButtonText}>Remove item</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <View style={styles.priceText}>
          <Text style={styles.text}>Price : </Text>
          <Text style={styles.text}> {item.price}</Text>
          <Text style={styles.text}> $ </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={element => element.id}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.emptyCartView}>
          <Text style={styles.emptyCartText}> Cart is empty ! Please add </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  emptyCartView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 150,
    height: 150,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    padding: 10,
  },
  imageWrapper: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
  },
  text: {
    marginVertical: 10,
    color: '#000000',
    marginLeft: 15,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    marginVertical: 15,
    backgroundColor: 'blue',
    padding: 10,
  },
  addButtonText: {
    fontSize: 20,
    color: '#ffffff',
  },
  priceText: {
    flexDirection: 'row',
  },
});
