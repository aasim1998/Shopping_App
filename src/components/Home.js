import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {ActivityIndicator} from 'react-native-paper';
import {useCartContext} from './context/CartContext';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {addToCartHandler} = useCartContext();

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

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
          <TouchableOpacity style={styles.addButton}>
            <Text
              style={styles.addButtonText}
              onPress={() => addToCartHandler(item)}>
              Add to Cart
            </Text>
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
      {loading ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator size={'large'} color={'black'} />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={element => element.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 180,
    height: 180,
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
    color:'#000000'
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
