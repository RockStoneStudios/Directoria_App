import { StyleSheet, Text, View , Image, Touchable, TouchableOpacity} from 'react-native'
import React, { useState,useContext } from 'react'
import {FontAwesome,AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';
import { Directorio } from '../context/DirectorioContext';
import { useNavigation } from '@react-navigation/native';


const ProductoCard = ({item}) => {
    const {obtenerProducto} = useContext(Directorio);
    const navigation = useNavigation();
  return (
    <View style={{...styles.productoContainer,marginBottom : 20}}>
      <View>
          <View style={styles.container}>
              <Text>{item.nombre}</Text>
              <Text>${item.precio}</Text>
          </View>
          <View style={styles.containerEstrellas}>
            <Text 
                style={{backgroundColor : "#fffff0", padding : 3,borderRadius : 4}}>{
                [0,0,0,0,0].map((en,i)=>(
                  <FontAwesome style={{marginHorizontal : 3,margin : 2}} key={i} name={i<Math.floor(item.calificacion) ? 'star' : 'star-o'} size={13} color="#eaed01" />)
                )
            }
            </Text>
            <View style={styles.sello}>
                <Text style={{textAlign : 'center',color:'white',fontWeight :'800'}}>{item.sello}</Text>
            </View>
          </View>
            <View style={styles.containerIcons}>
              <AntDesign style={styles.circuloIcons} name='hearto' size={24} color="#ae1002" />
              <MaterialCommunityIcons style={{...styles.circuloIcons,marginLeft : 5}} name='share-outline' size={24} color="#ff72cf"/>
            </View>
        </View>
        <View style={styles.imagenContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={()=>{
              obtenerProducto(`${item._id}`),
              navigation.navigate('ProductoDetalle')

            }}> 
                <Image source={{uri : `${item.imagen}` }} style={styles.imagen} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProductoCard

const styles = StyleSheet.create({

  container : {
      marginLeft : 10,
      
  },
  containerEstrellas : {
    width : 90,
    marginLeft : 20,
    marginTop : 10,
    flexDirection : 'row',
    alignItems : 'center'
  },
  sello : {
    marginLeft : 20,
    backgroundColor : '#fdcccb',
    padding : 2,
    borderRadius : 6,
    width  :90,  
  },
  containerIcons : {
    marginLeft : 20,
    flexDirection : 'row',
    alignItems : 'center'
  },
  circuloIcons :{
     borderColor : '#666',
     borderWidth : 1,
     borderRadius : 20,
     padding : 5
  },
  productoContainer : {
     flexDirection : 'row',
     alignItems: 'center',
     justifyContent : 'space-between'
  },
  imagenContainer : {
    marginRight : 10
  },
  imagen : {
      width : 130,
      height : 120,
      borderRadius : 12
  }
})