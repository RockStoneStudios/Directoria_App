import {
    ImageBackground,
    StatusBar,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import {MaterialIcons,AntDesign} from '@expo/vector-icons'
  import {useContext,useState} from 'react';
  import { Directorio } from "../context/DirectorioContext";
  import {useNavigation} from '@react-navigation/native'  

  


  const Nosotros = () => {
       const {negocio} = useContext(Directorio);
       const navigation = useNavigation();
       const [like,setLike] = useState(false);
     return(
         <SafeAreaView style={styles.container}>
           <StatusBar translucent backgroundColor= "rgba(0,0,0,0)" />
             <View style={{flex : 1, marginHorizontal : 2}}>

               <ImageBackground style={styles.imagen} source={{uri : negocio.imagen}}>
                  <View style={styles.header}>
                    <MaterialIcons name='arrow-back-ios' size={29} color= "#ffe" onPress={()=> navigation.goBack()} />
                    <MaterialIcons name='more-vert' size={29} color= "#efe"/>
                  </View>
                  <View style={styles.detalleImagen}>
                     <Text style={styles.nombre}>{negocio.nombre}</Text>
                     <View style={styles.ratingContainer}>
                       <MaterialIcons name="star" size={28} color="#9D8510"/>
                       <Text style={styles.rating}>{negocio.rating}</Text>
                     </View>
                  </View>
               </ImageBackground>
               <View style={styles.infoContainer}>
                     <TouchableOpacity style={styles.iconContainer} activeOpacity={0.7} onPress={()=> setLike(!like)}>
                          {
                            like ? ( <AntDesign name='heart' size={28} color= "#ea1000"/>) : (<AntDesign name="hearto" size={28} color="#ea1000"/>)
                          }
                     </TouchableOpacity>
               <View style={styles.direccionContainer}>
                  <MaterialIcons name="place" size={28} color= "#12aeee"/>
                  <Text style={styles.direccion}>{negocio.direccion}</Text>
               </View>    
          
              
               <View style={{height : 200}}>
                <Text style={styles.nosotros}>Acerca de Nosotros</Text>
                  <Text style={styles.descripcion}>Lorem Ipsum is simply dummy text of the printing and 
                     typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took
                     a galley of type and scrambled it to make a type specimen book
                  </Text>  
               </View>
            

               </View>
             </View>
           

         
         </SafeAreaView>
     )
    
  };
  
  export default Nosotros;
  
  const styles = StyleSheet.create({
     container : {
         flex: 1,
         backgroundColor : '#eee',
       
     },
     imagen : {
      width : '100%',
      flex : 0.6,
      borderBottomLeftRadius : 8,
      borderBottomRightRadius : 7,
      resizeMode : 'cover'
     },
     header : {
       marginTop : 50,
       flexDirection : 'row',
       justifyContent : 'space-between',
       paddingHorizontal : 20
     },
     detalleImagen:{
       padding :20,
       flexDirection : 'row',
       justifyContent : 'space-between',
       width : '100%',
       position : 'absolute',
       bottom : 20
     },
     nombre : {
       width: '70%',
       fontSize:30,
       fontWeight : '800',
       color : '#eff',
       marginBottom : 20
     },
     ratingContainer : {
       flexDirection : 'row',
       justifyContent : 'center',
       alignItems : 'center',
       position : 'absolute',
       bottom : 50,
       right : 10
     },
     rating : {
       color : '#eef',
       fontWeight : '900',
       marginLeft : 2
     },
     infoContainer:{
       top: -20,
       borderTopLeftRadius : 30,
       borderTopRightRadius : 30,
       paddingVertical : 40,
       paddingHorizontal : 20,
       backgroundColor : '#eee',
       flex : 0.2
     },
     iconContainer : {
       height : 60,
       width : 60,
       position : 'absolute',
       top : -30,
       right : 55,
       backgroundColor : '#ffffff',
       borderRadius : 30,
       elevation : 11,
       justifyContent : 'center',
       alignItems : 'center'

     },
     direccionContainer : {
      flexDirection : 'row',
      marginTop : 10
     },
     direccion : {
       marginLeft : 5,
       fontSize : 16,
       color : "#999",
       fontWeight : '700'
     },
     nosotros : {
       marginTop : 18,
       fontWeight : '800',
       fontSize : 18
     },
     textoContainer : {
      flex : 1
     },
     descripcion : {
      marginTop:20,
      lineHeight : 20,
      fontSize : 13
     }
     
  });