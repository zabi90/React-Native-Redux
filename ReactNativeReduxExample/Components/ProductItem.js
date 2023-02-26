import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import cartSlice from '../data/cartSlice';
import {useDispatch, useSelector} from 'react-redux';

const ProductItem = ({product}) => {
  const addToCart = cartSlice.actions.addToCart;
  const removeFromCart = cartSlice.actions.removeFromCart;

  const dispatch = useDispatch();
  const {cartProductsIds} = useSelector((state) => 
    state.cart
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{product.name}</Text>
      <Text style={styles.description}>{product.detail}</Text>
      {!cartProductsIds.includes(product.id) ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(addToCart(product.id));
          }}>
          <Text>Add to cart</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(removeFromCart(product.id));
          }}>
          <Text>Remove from cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 4,
    backgroundColor: 'white',
    borderColor: 'lightGray',
    borderWidth: 1,
    borderRadius: 8,
  },
  heading: {
    fontSize: 22,
    color: 'Black',
    margin: 8,
  },
  description: {
    fontSize: 18,
    color: 'Black',
    marginStart: 8,
    marginEnd: 8,
  },
  button: {
    padding: 4,
    margin: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
});
