import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Servicios = ({route,navigation}) => {
   console.log(route.params)
  return (
    <View style={styles.container}>
      <Text>Servicios</Text>
    </View>
  )
}

export default Servicios

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
}
})