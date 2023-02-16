import { ImageBackground, ScrollView, StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native';
import React, {useContext} from 'react';
import { Directorio } from '../context/DirectorioContext'; 
import SPACING from '../config/Spacing';
import { useNavigation } from '@react-navigation/native';
import {Ionicons,FontAwesome} from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import * as Animatable from 'react-native-animatable';
const height = Dimensions.get('screen').height;

const Servicios = () => {
    const navigation = useNavigation();
     const {negocio}  = useContext(Directorio);



      const handlePhone = async => {
         Linking.openURL(`tel:${negocio.telefono}`)
      }

  return (
    <>
    <ScrollView style={{backgroundColor : '#fff'}}>
        <View style={styles.container}>
          <ImageBackground style={styles.imagenBackground} source={{uri: `${negocio.imagen}`}}>
               <TouchableOpacity style={styles.icono} onPress={()=> navigation.goBack()}>
                  <Ionicons name='arrow-back' size={SPACING*2.5} color='gray'/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.icono}>
                  <Ionicons name='share' size={SPACING*2.5} color='#666'/>
               </TouchableOpacity>
          </ImageBackground>
          <View style={styles.containerInfo}>
                  <View style={styles.containerNombre}>
                     <Text style={styles.nombre}>{negocio.nombre}</Text>
                  </View>
                  <Animatable.View  animation='wobble' easing= 'ease-in' duration={1200} style={styles.containerTelefono}>
                     <TouchableOpacity 
                      onPress={handlePhone}
                      style={{flexDirection : 'row',alignItems : 'center'}}>
                        <FontAwesome name='mobile-phone' color="#233" size={SPACING*3.6}/>
                        <Text style={styles.telefono}>{negocio.telefono}</Text>
                     </TouchableOpacity>
                  </Animatable.View>
              </View>
        </View>

        <View style={styles.containerServicios}>
                 {
                   negocio?.servicios?.length > 1  ?  <Text style={styles.tituloServicios}>Servicios</Text> :null
                 }
                  {
                    
                     negocio.servicios?.map((servicio,index) =>(
                        <View key={index} style={styles.service}>
                            <View
                             style={{
                             width: SPACING,
                             height: SPACING,
                             backgroundColor: '#111',
                             borderRadius: SPACING,
                      }}
                    />
                           <Text style={styles.servicio}>{servicio}</Text>
                        </View>
                     ))
                   }
               </View>
    </ScrollView>
    </>
  )
}

export default Servicios

const styles = StyleSheet.create({

imagenBackground : {
  padding : SPACING*2,
  height : height/2.5,
  paddingTop : SPACING*3,
  resizeMode : 'cover',
  flexDirection : 'row',
  justifyContent : 'space-between'
},

icono :{
  height : SPACING*4.5,
  width : SPACING*4.5,
  backgroundColor : '#eef',
  justifyContent : 'center',
  alignItems : 'center',
  borderRadius : SPACING*2.5
},

containerInfo : {
  padding: SPACING * 2,
  paddingTop: SPACING * 3,
  marginTop: -SPACING * 3,
  borderTopLeftRadius: SPACING * 3,
  borderTopRightRadius: SPACING * 3,
  backgroundColor: "#fff",
  flexDirection: 'row',
  justifyContent : 'space-around'
  
  
},
 containerNombre : {
   width : '70%'
 },
nombre: {
  fontSize : SPACING*3,
  color : '#223',
  fontWeight : '700'
},
containerTelefono:{
  padding : SPACING/2,
  backgroundColor : '#efefef',
  flexDirection : 'row',
  borderRadius : SPACING,
  justifyContent : 'center',
  alignItems: 'center',
  paddingHorizontal : SPACING,
  elevation : 10
},
  telefono : {
  fontSize : SPACING*1.4,
  fontWeight : '700',
  color : "#556",
  marginLeft : 5
},
containerServicios : {
  marginVertical : SPACING*3,
  marginHorizontal : 10,
  width : '96%',
  borderRightColor : "#555",
  borderRightWidth : 2,
  elevation : 5,
  borderBottomRightRadius : 8
},
  tituloServicios : {
  fontSize : 22,
  color : '#554',
  fontWeight : '700',
  marginTop : 8,
  marginLeft : 10
  },

  service : {
  marginLeft : 6,
  marginVertical : SPACING*1.3,
  flexDirection : 'row',
  alignItems : 'center',
  paddingLeft  : 4,
  paddingRight : 12
  },
   servicio : {
    color: '#444',
    fontSize : SPACING*1.4,
    fontWeight : '700',
    marginLeft : 5
},

})