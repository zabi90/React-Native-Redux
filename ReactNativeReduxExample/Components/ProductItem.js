import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>{product.name}</Text>
      <Text style = {styles.description} >{product.detail}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container : {
        margin : 4,
        backgroundColor : 'White',
        borderColor : 'LightGray',
        borderWidth : 1,
        borderRadius : 8
    },
    heading:{
        fontSize : 22,
        color : 'Black',
        margin : 8
    },
    description : {
        fontSize : 18,
        color : 'Black',
        marginStart : 8,
        marginEnd : 8
    }
})