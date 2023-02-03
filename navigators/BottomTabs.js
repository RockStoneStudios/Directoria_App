import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Nosotros from '../screen/Nosotros';
import {FontAwesome} from '@expo/vector-icons'
import Productos from '../screen/Productos';
import Servicios from '../screen/Servicios';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
     <Tab.Navigator
       screenOptions={({route})=> ({
           headerShown : false,
           tabBarIcon : ({focused,color,size}) => {
            let iconName = "";
            let colorIcon = "";
             switch(route.name){
                case 'Nosotros':
                    iconName= 'home';
                    colorIcon = "#e55829"

                    break;
                case 'Productos':
                    iconName= 'shopping-cart';
                    colorIcon = "#e55829"
                    break;
                case 'Servicios':
                    iconName= 'cogs'
                    colorIcon = "#e55829"
             }
             return (
             

                   <FontAwesome  name={iconName} size={focused ? size*1.3 : size} color={focused ? colorIcon :color}/>
              
              )
           }
        })}
     >
        <Tab.Screen name='Nosotros' component={Nosotros} /> 
        <Tab.Screen name='Productos' component={Productos}  />
        <Tab.Screen name='Servicios' component={Servicios}/>
       
      
     
     </Tab.Navigator>
  )
}

export default BottomTabs;

