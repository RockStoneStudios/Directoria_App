import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { Directorio } from '../context/DirectorioContext';

const ItemCategory = ({item}) => {
 const {obtenerCategoria} = useContext(Directorio)
  return (
    <TouchableOpacity onPress={()=> obtenerCategoria(item._id)}>

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
        marginHorizontal : 10,
        marginVertical : 5,
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    imagen: {
        width : 65,
        height : 65,
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
        textAlign : 'left',
        marginHorizontal : 8
    }
})