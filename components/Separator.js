import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
   <Text style={styles.separator} />
  )
}

export default Separator

const styles = StyleSheet.create({
    separator : {
        height : 1,
        width : '98%',
        borderWidth : 1,
        borderColor : '#D2D2D3',
        marginBottom:2
    }
})