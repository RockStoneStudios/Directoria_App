import { Text, View } from 'react-native'
import React,{useState,useEffect, createContext} from 'react'
import clienteAxios from '../config/clientAxios';
const Directorio = createContext();

const DirectorioContext = ({children}) => {
   const [categorias,setCategorias] = useState([]);
   const [negocios,setNegocios] = useState([]);
   const [negocio,setNegocio] = useState({});
   const [producto,setProducto] = useState({});
   const [categoria,setCategoria] = useState({});


   const obtenerCategoria = async id => {
      const {data} = await clienteAxios.get(`categorias/${id}`);
      setCategoria(data);
   }



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
      
     setNegocio(data);
   }

   const obtenerProducto = async id => {
      const {data} = await clienteAxios.get(`productos/${id}`);
      setProducto(data);

   }





  return (
     <Directorio.Provider value={{
      categorias,
      negocios,
      obtenerNegocio,
      negocio,
      producto,
      obtenerProducto,
      obtenerCategoria,
      categoria
      }}>
       {children}
     </Directorio.Provider>  
  )
}

export {
  Directorio,
  DirectorioContext
}

