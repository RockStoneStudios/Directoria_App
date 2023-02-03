import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
  } from "react-native";

  import {useContext} from 'react';
  import { Directorio } from "../context/DirectorioContext";

  


  const Nosotros = ({route,navigation}) => {
       const {negocio} = useContext(Directorio);
     return(
        <View style={styles.container}>
           <Text>{negocio.nombre}</Text>
        </View>
     )
    
  };
  
  export default Nosotros;
  
  const styles = StyleSheet.create({
     container : {
         flex: 1,
         alignItems : 'center',
         justifyContent : 'center'
     }
  });