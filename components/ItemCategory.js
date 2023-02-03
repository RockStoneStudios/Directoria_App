import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

const ItemCategory = ({item}) => {
  return (
    <TouchableOpacity>

        <View style = {styles.container}>
            <Image source={{uri : `${item.imagen}`}} style={styles.imagen}/>
            <Text style={styles.itemText}>{item.nombre}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ItemCategory

const styles = StyleSheet.create({
    container : {
        margin : 10
    },
    imagen: {
        width : 70,
        height : 70,
        borderRadius : 30,
        marginRight : 10,
        resizeMode : 'cover',
        backgroundColor : '#ddd'
    },
    itemText : {
        fontSize: 13,
        fontWeight : '600',
        color : "#6e6e7e",
        marginTop : 4,
        alignItems:'center',
        marginHorizontal : 8
    }
})