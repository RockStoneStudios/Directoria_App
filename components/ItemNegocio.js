import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react';
import {AntDesign,Ionicons} from '@expo/vector-icons'
import Separator from './Separator';
import { useNavigation } from '@react-navigation/native';
import { Directorio } from '../context/DirectorioContext';

const ItemNegocio = ({item}) => {
    const navigation = useNavigation();
    const {obtenerNegocio} = useContext(Directorio);

  return (
    <TouchableOpacity activeOpacity={0.7}  onPress={()=>{
        obtenerNegocio(item._id),
        navigation.navigate('BottomTabs')}} >
    <View style={styles.containerImage}>
        <Image source={{uri : `${item.imagen}`}} style={styles.imagen} />
        <View style={styles.containerInfo}>
          <View>
            <View style={{padding : 8,backgroundColor : 'white'}}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.categoria}>{item.descripcion}</Text>
            </View>
         </View>
            <View style={styles.containerRating}>
                <Text style={styles.rating}>{item.rating}</Text>
                <AntDesign name= 'star' color= "#eee" size={24}/>

            </View>
        </View>
        <View style={styles.containerLetrero}>
            <Ionicons name='ios-time-outline' size={18} color= 'black'/>
            <Text style={styles.tiempo_entrega}>{item.tiempo_entrega}</Text>
        </View>
         {
            item.oferta ? (
            <View style={styles.containerOfertas}>
           
                <Text style={styles.textOferta}>{item.oferta && '20% Desc'}</Text>
                
            </View>) : null

         }
        <View style={{backgroundColor: 'white', padding : 10,marginBottom : 8,borderTopLeftRadius : 5}}>
            <Separator/>
            <View style={styles.num_domicilios}>
               <View style={styles.iconoArrow}>
                 <AntDesign  name='doubleright' size={24} color= 'white'/>
               </View>
                 <Text style={styles.num}>{item.num_domicilios} Servicios prestados</Text>
                <View style={{marginLeft : 25}}>
                    <Text style={styles.calidad}>Calidad</Text>
                    <Text style={styles.asegurada}>Asegurada</Text>
                </View>
            </View>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default ItemNegocio

const styles = StyleSheet.create({
    imagen : {
         width : '100%',
         aspectRatio : 6/4, 
         borderTopLeftRadius : 7,
         borderTopRightRadius : 7,
         resizeMode : 'contain'
    },
    containerImage : {
        margin : 10,
    },
    nombre : {
        fontSize : 17,
        fontWeight : '800'
    },
    categoria : {
        color : '#665',
        fontSize : 12
    },
    containerInfo:{
        flexDirection : 'row' ,
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : '#fff'
    },
    containerRating : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#27DD0E',
        paddingHorizontal :5,
        borderRadius : 5
    },
    rating : {
        fontSize : 15,
        fontWeight : '800',
        color : '#fefefe',
        
    },
    iconoArrow : {
        backgroundColor : '#e55829',
        padding : 2,
        width : 30,
        height : 30,
        borderRadius : 12,
        

    },
    num_domicilios : {
        flexDirection : 'row',
         alignItems : 'center',
         
         marginTop : 10
    },
    num : {
        marginLeft : 5
    },
    calidad : {
        fontSize : 13,
        fontWeight : '800'
    },
    asegurada : {
        fontSize : 12,
        fontWeight : 'bold',
        color :'gray'
    },
     containerLetrero : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : '#eeeeee',
        position : 'absolute',
        right : 5,
        top : 200,
        padding : 4,
        borderRadius : 5,
        
       
     },
     tiempo_entrega : {
        fontSize : 13,
        fontWeight : '600',
        paddingLeft : 2
     },
     containerOfertas : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : '#e55829',
        position : 'absolute',
        left : 2,
        top : 20,
        padding : 5,
        borderTopRightRadius : 14,
        borderBottomLeftRadius : 10
     },
     textOferta :{ 
        color :'white',
        fontWeight : '800'
     }
   
})