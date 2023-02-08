import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView, StatusBar, TextInput, ScrollView} from 'react-native'
import React,{useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Ionicons,FontAwesome5,MaterialCommunityIcons,AntDesign,FontAwesome} from '@expo/vector-icons';
import { Directorio } from '../context/DirectorioContext';
import ProductoCard from '../components/ProductoCard';




const Productos = () => {
  const navigation = useNavigation();
  const {negocio} = useContext(Directorio);
  return (
    <SafeAreaView>
     <ScrollView style={{backgroundColor : '#fff'}}>
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
        <View style={styles.containerOpciones}>
            <View style={styles.domicilioContainer}>
              <FontAwesome style={styles.containerIcon} name='motorcycle' size={25} color= "black"/>
              <View>
                <Text style={{fontSize :13,marginLeft:2}}>Modo</Text>
                <Text style={{fontSize :13,marginLeft:2}}>Domicilio</Text>
              </View>
            </View>
            <View>
            
              <View>
                {
                  negocio.abierto ?  (
                    <View style={{flexDirection : 'row'}}>
                      <MaterialCommunityIcons style={styles.containerIcon} name='door-open' size={28} color= "black"/>
                      <View>
                        <View style= {styles.btnAbierto}/> 
                        <Text style={styles.estadoAbCe}>Abierto</Text>
                      </View>
                    </View>
                  )
                  : (
                    <View style={{flexDirection : 'row'}}>
                      <MaterialCommunityIcons style={styles.containerIcon} name='door-closed' size={28} color= "black"/>
                      <View>
                        <View style= {{...styles.btnAbierto,backgroundColor : '#ea2000'}}/>
                        <Text style={styles.estadoAbCe}>Cerrado</Text>
                      </View>
                    </View>
                )}
              </View>
            </View>
            <View style={{...styles.domicilioContainer,marginRight :15}}>
              <MaterialCommunityIcons style={{...styles.containerIcon,color : '#2020ee'}} name='brightness-percent' size={25} color= "black"/>
              <View>
                <Text style={{fontSize :13,marginLeft:2}}>Ofertas</Text>
                <Text style={{fontSize :13,marginLeft:2}}>Ver</Text>
              </View>
            </View>
        </View>
        
        
        <View style={styles.containerBusqueda}>
          <AntDesign style={{marginLeft : 5}} name='search1' size={25} color= '#3a3a3a' />
            <TextInput style={styles.busqueda} placeholder="Busca tu producto" color="#666">
          </TextInput>
        </View>
        <View>
          <Text style={styles.tituloMenu}>Nuestro Menu</Text>
          <Text style={styles.decoracion} />
        </View>
        <View>
           {
             negocio.productos.map((item)=> 
                <ProductoCard key={item._id} item ={item}/>
             )
           }
        </View>
      </ScrollView> 
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
    marginTop :20,
    width : 300
   },
   nombre : {
      fontSize : 18,
      fontWeight : '800'
   },
   desc : {
     fontSize : 13,
     color : 'gray',
     fontWeight : '500',
     marginTop : 5,
     
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
   },
    domicilioContainer :{
       flexDirection : 'row',
       alignItems : 'center'
    },
    containerOpciones :{
      marginLeft : 10,
      marginTop : 20,
      flexDirection : 'row',
      justifyContent : 'space-between'
    },
    containerIcon : {
      backgroundColor : '#d9d8d9',
      paddingHorizontal : 4,
      paddingVertical : 8,
      borderRadius : 2,
      color : '#5d5d5d'
    },
    containerBusqueda : {
      marginTop : 10,
      flexDirection : 'row',
      backgroundColor : '#c4c4c4',
      alignItems : 'center',
      borderRadius : 6
    },
    busqueda:{
       
       backgroundColor : '#c4c4c4',
       width : '90%',
       padding : 6,
       borderRadius : 8
    },
    btnAbierto : {
       width : 20,
       height : 20,
       backgroundColor : '#10ae10',
       borderRadius : 20,
       marginLeft : 20
    },
    estadoAbCe : {
      fontSize : 13,
      marginLeft : 5,
      color : "#554"
    },
    tituloMenu : {
       fontSize : 17,
       marginTop : 5,
       color : "#343",
       fontWeight : '700',
       
       
    },
    decoracion : {
       borderColor :"#de1595",
       borderWidth : 2,
       height : 2,
       width : 150,
       marginTop : 3,
       marginBottom : 15
    }

})