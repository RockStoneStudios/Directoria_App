import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import {items} from '../data/Items';


const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
       horizontal ={true}
       showsHorizontalScrollIndicator ={false}
       data={items}
       renderItem={({item})=>(
         <TouchableOpacity style={styles.containerItem}>
            <Text style={styles.itemText}>{item.name}</Text>
         </TouchableOpacity>
       )}
       />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container :{
        marginTop : 4
    },
    containerItem:{
        backgroundColor : "#e55829",
        marginTop : 10,
        marginHorizontal : 8,
        marginBottom : 5,
        padding : 5,
        borderRadius : 4,
    
    },
    itemText :{
        color : "#efe"
    }
})