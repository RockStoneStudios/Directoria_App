import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Productos = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      

       <Text>Productos</Text>
     
    </View>
  )
}

export default Productos

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
}
})