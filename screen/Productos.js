import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView, StatusBar} from 'react-native'
import React,{useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Ionicons,FontAwesome5,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import { Directorio } from '../context/DirectorioContext';




const Productos = () => {
  const navigation = useNavigation();
  const {negocio} = useContext(Directorio);
  return (
    <SafeAreaView>
      <StatusBar translucent  backgroundColor= "rgba(0,0,0,0.1)"/>
       <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.btnAtras} onPress={()=> navigation.goBack()}>
            <Ionicons name='chevron-back' size={25} color= '#ffe'/>
          </TouchableOpacity>
           <View style={styles.iconContainer1}>
              <TouchableOpacity>
                <Ionicons style={{marginRight : 8}} name='md-camera-outline' size={28} color= '#000'/>
              </TouchableOpacity>
              <TouchableOpacity >
                <FontAwesome5  style={{marginRight : 8}} name='bookmark' size={26} color= '#111'/>
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons  style={{marginRight : 8}} name='share-outline' size={28} color= '#111'/>
              </TouchableOpacity>
           </View>
       </View>
       <View style={{flexDirection : 'row', justifyContent :'space-between', alignItems:'center'}}>
          <View style={styles.info}>
              <Text style={styles.nombre}>{negocio.nombre}</Text>
              <Text style={styles.desc}>{negocio.descripcion}</Text>
              <Text style={styles.direccion}>{negocio.direccion}</Text>
              <View style={{flexDirection : 'row', alignItems : 'center',marginTop : 5}}>
                 <AntDesign name='phone' size={26} color= '#191919' />
                 <Text style={{marginLeft : 5}}>{negocio.telefono}</Text>
              </View>
          </View>
          <View>
            <View style={styles.rating}>
               <Text style={{marginRight : 5,color : 'white', fontWeight : '700'}}>{negocio.rating}</Text>
               <AntDesign name='star' size={25} color="white"/>
            </View>
            <View style={styles.productos}>
               <Text style={{marginRight : 5,color : 'white', fontWeight : '700'}}>{negocio.productos.length}</Text>
               <Text style={styles.textoProducto}>Productos</Text>
            </View>
          </View>
       </View>
       <View>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
       </View>
    </SafeAreaView>
  )
}

export default Productos

const styles = StyleSheet.create({
   btnAtras : {
    marginTop : 30,
    backgroundColor : '#002D63',
    width : 40,
    height : 40,
    marginLeft : 10,
    borderRadius :20,
    justifyContent : 'center',
    alignItems : 'center'
   },
   iconsContainer : {
     flexDirection : 'row',
     justifyContent : 'space-between',
     alignItems : 'center'
   },
   iconContainer1:{
    flexDirection : 'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop : 20,
    marginHorizontal : 5,

   },
   info:{
    marginLeft : 10,
    marginTop :20
   },
   nombre : {
      fontSize : 18,
      fontWeight : '800'
   },
   desc : {
     fontSize : 15,
     color : 'gray',
     fontWeight : '500',
     marginTop : 5
   },
   direccion : {
    fontSize : 15,
    color : '#60a286',
    fontWeight : '500'
   },
   rating : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#208e10',
      width : 120,
      paddingVertical : 5,
     
      borderTopLeftRadius : 10
   },
   productos : {
    
     alignItems : 'center',
     width :120,
     padding : 4,
     backgroundColor : '#F9629F',
     marginTop : 8,
     borderTopLeftRadius : 12
   },
   textoProducto : {
     fontSize : 15,
     color : 'white',
     fontWeight : '800'
   }
})