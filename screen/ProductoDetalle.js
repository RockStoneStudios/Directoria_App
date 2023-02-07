import { ImageBackground, ScrollView, StyleSheet, Text, View ,Dimensions, TouchableOpacity,SafeAreaView} from 'react-native'
import React,{useContext} from 'react';
import { Directorio } from '../context/DirectorioContext';
import {Ionicons} from '@expo/vector-icons'
import SPACING from '../config/Spacing';
import {useNavigation} from '@react-navigation/native'

const height = Dimensions.get('screen').height;

const ProductoDetalle = () => {
    const navigation = useNavigation();
    const {producto} = useContext(Directorio);
   
  return (
    <>
        <ScrollView>
          <View>
              <ImageBackground 
              source={{uri : `${producto.imagen}`}}
              style={styles.imagenBackground}
              >
               <TouchableOpacity style={styles.icono} onPress={()=> navigation.goBack()}>
                  <Ionicons name='arrow-back' size={SPACING*2.5} color='gray'/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.icono}>
                  <Ionicons name='share' size={SPACING*2.5} color='#666'/>
               </TouchableOpacity>
              </ImageBackground>  
              <View style={styles.containerInfo}>
                  <View style={styles.containerNombre}>
                     <Text style={styles.nombre}>{producto.nombre}</Text>
                  </View>
                  <View style={styles.containerRating}>
                     <Ionicons name='star' color="#233" size={SPACING*1.7}/>
                     <Text style={styles.rating}>{producto.calificacion}</Text>
                  </View>
              </View>
          </View>
             <View style={styles.containerInfo}>
                <View style={styles.containerOption}>
                        <Ionicons name='time' color="#233" size={SPACING*2.5}/>
                        <Text style={styles.rating}>{producto.tiempo_preparacion} min</Text>
                  </View>
                  <View style={styles.containerOption}>
                        <Ionicons name='bicycle' color="#233" size={SPACING*2.8}/>
                        <Text style={styles.rating}>{producto.tiempo_preparacion+5}min</Text>
                  </View>
                  <View style={styles.containerOption}>
                        <Ionicons name='restaurant-outline' color="#233" size={SPACING*2.5}/>
                        <Text style={styles.rating}>{producto.tiempo_preparacion}min</Text>
                  </View>
             </View>
               <View style={styles.containerIngredientes}>
                  <Text style={styles.tituloIngredientes}>Ingredientes</Text>
                  {
                     producto.ingredientes?.map((ingredient,index) =>(
                        <View key={index} style={styles.ingredient}>
                            <View
                             style={{
                             width: SPACING,
                             height: SPACING,
                             backgroundColor: '#444',
                             borderRadius: SPACING,
                      }}
                    />
                           <Text style={styles.ingrediente}>{ingredient}</Text>
                        </View>
                     ))
                   }
               </View>
               <View>
                 <Text style={styles.tituloDescripcion}>Descripcion</Text>
                 <View style={{width : 180, height : 2, borderWidth : 2, borderColor : '#ff951e', marginTop : 1, marginBottom : 10}}/>
                 <Text style = {styles.descripcion}>{producto.descripcion}</Text>
               </View>
        </ScrollView>
        <SafeAreaView>
          <View style={{ padding: SPACING * 2 }}>
            <TouchableOpacity
              onPress={()=>navigation.goBack()}
              style={{
                width: "100%",
                padding: SPACING * 2,
                backgroundColor: "#222",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SPACING * 2,
              }}
            >
              <Text
                style={{
                  fontSize: SPACING * 2,
                  color: "#eee",
                  fontWeight: "700",
                }}
              >
                Comprame por solo
              </Text>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  color:  "#fe2",
                  fontWeight: "700",
                  marginLeft: SPACING / 2,
                }}
              >
                $ {producto.precio}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    </>
  )
}

export default ProductoDetalle

const styles = StyleSheet.create({
    imagenBackground : {
      padding : SPACING,
      height : height/2.4,
      paddingTop : SPACING*4,
      resizeMode : 'contain',
      flexDirection : 'row',
      justifyContent : 'space-between'
    },
    icono :{
      height : SPACING*4.5,
      width : SPACING*4.5,
      backgroundColor : '#eef',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : SPACING*2.2
    },
    containerInfo : {
      padding: SPACING*2,
      paddingTop : SPACING*3,
      marginTop : -SPACING*3,
      borderTopLeftRadius : SPACING*3,
      borderTopRightRadius : SPACING*3,
      backgroundColor : '#fff',
      flexDirection : 'row',
      alignItems : 'center'
    },
     containerNombre : {
       width : '70%'
     },
    nombre: {
      fontSize : SPACING*3,
      color : '#223',
      fontWeight : '700'
    },
    containerRating:{
      padding : SPACING/2,
      backgroundColor : '#efef20',
      flexDirection : 'row',
      borderRadius : SPACING,
      justifyContent : 'center',
      alignItems: 'center',
      paddingHorizontal : SPACING
    },
    containerOption:{
      padding : SPACING/2,
      backgroundColor : '#bbb',
      flexDirection : 'row',
      borderRadius : SPACING,
      justifyContent : 'center',
      alignItems: 'center',
      paddingHorizontal : SPACING*2,
      marginTop : 10
    },
    rating : {
      fontSize : SPACING*1.5,
      fontWeight : '700',
      color : "#555"
    },
    tiempoContainer : {
      flexDirection : 'row',
      alignItems : 'center'
    },
     containerInfo : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent :'space-between',
      marginTop : 10,
      paddingHorizontal: SPACING*1.2
    },
     containerIngredientes : {
        marginVertical : SPACING*3,
        marginLeft : 10
     },
     tituloIngredientes : {
      fontSize : 22,
      color : '#454',
      fontWeight : '700'
     },
     ingredient : {
      marginLeft : 5,
      marginVertical : SPACING*1.3,
      flexDirection : 'row',
      alignItems : 'center'
     },
     ingrediente : {
       color: '#666',
       fontSize : SPACING*1.7,
       fontWeight : '700',
       marginLeft : 5
     },
     tituloDescripcion : {
       fontSize : 23,
       fontWeight : '700',
       marginLeft : 8
     },
     descripcion : {
       fontSize : 14,
       color: '#454',
       lineHeight : 20,
       fontWeight : '600',
       paddingHorizontal : 12

     }
})