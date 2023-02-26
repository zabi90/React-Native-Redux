import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import ProductItem from '../Components/ProductItem';
import React, {useEffect} from 'react';
import {fetchAllProducts} from '../data/productSlice';

import {useDispatch, useSelector} from 'react-redux';

const ProductScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const {cart, products} = state;

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={products.fetchStatus == 'loading' ? true : false}
            onRefresh={() => {
              dispatch(fetchAllProducts());
            }}
          />
        }
        data={products.data}
        renderItem={({item}) => {
          return <ProductItem product={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
