import {DirectorioContext} from './context/DirectorioContext'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import Nosotros from './screen/Nosotros';
import BottomTabs from './navigators/BottomTabs';
import Servicios from './screen/Servicios';
import ProductoDetalle from './screen/ProductoDetalle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <DirectorioContext>
      <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown : false}}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='BottomTabs' component={BottomTabs}/>
            <Stack.Screen name='ProductoDetalle' component={ProductoDetalle}/>
            
          </Stack.Navigator>
      </NavigationContainer>
    </DirectorioContext>
  );
}


