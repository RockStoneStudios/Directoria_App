import { Text, View } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'
import clienteAxios from '../config/clientAxios';
const Directorio = createContext();

const DirectorioContext = ({children}) => {
   const [categorias,setCategorias] = useState([]);
   const [negocios,setNegocios] = useState([]);
   const [negocio,setNegocio] = useState({});

    const obtenerCategorias = async () => {
       const {data} = await clienteAxios.get('categorias/');
      
       setCategorias(data);
    }

    const obtenerNegocios = async () => {
      const {data} = await clienteAxios.get('negocios/');
   
      setNegocios(data);
    }

   useEffect(()=> {
      obtenerCategorias();
      
   },[]);

   useEffect(()=> {
      obtenerNegocios();
   },[]);


   const obtenerNegocio = async id => {
     const {data} = await clienteAxios.get(`negocios/${id}`);
     console.log(data);
     setNegocio(data);
   }





  return (
     <Directorio.Provider value={{
      categorias,
      negocios,
      obtenerNegocio,
      negocio
      }}>
       {children}
     </Directorio.Provider>  
  )
}

export {
  Directorio,
  DirectorioContext
}

