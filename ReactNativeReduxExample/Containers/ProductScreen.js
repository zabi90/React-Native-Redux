import { StyleSheet, Text, View, FlatList, StatusBar, SafeAreaView  } from 'react-native'
import productList from './../data/productList.json'
import ProductItem from '../Components/ProductItem'
import React from 'react'

const ProductScreen = () => {
  return (
    <SafeAreaView  style={styles.container}>
        <FlatList
            data={productList}
            renderItem = {({item}) => {
                return (
                    <ProductItem product={item}/>
                )
            }}
            keyExtractor={item => item.id}
        />
    </SafeAreaView >
  )
}

export default ProductScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
})