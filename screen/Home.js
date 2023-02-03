import { StyleSheet, Text, TextInput, TouchableOpacity, View,Image, FlatList,Platform ,SafeAreaView, ScrollView} from 'react-native'
import React,{useEffect, useLayoutEffect, useState,useContext} from 'react';
import {AntDesign} from '@expo/vector-icons'
import Items from '../components/Items';


import { useNavigation } from '@react-navigation/native';
import { Directorio } from '../context/DirectorioContext';
import ItemCategory from '../components/ItemCategory';
import ItemNegocio from '../components/ItemNegocio';


const Home = () => {

    const navigation = useNavigation();
    const {categorias,negocios} = useContext(Directorio)
 
   
    
  return (
    <SafeAreaView style={styles.safeAndroid}>
     <ScrollView>
        <View style={styles.containerInput}>
        <AntDesign name='search1' size={24} color="#e52b50"/>
        <TextInput style={styles.textPlaceholder} placeholder='Restaurantes ,Licoreras, Servicio y mas . .'/>
        
        </View>
        <View>
         <Items/>
         <TouchableOpacity>
            <View style={{flexDirection : 'row', alignItems : 'center'}}>
                <Image 
                style={styles.image}
                 source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU"}}

                 />
                   <Image
                    style={styles.image}
                    source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/directorio-29fb5.appspot.com/o/chinotec.jpg?alt=media&token=6e4c45ea-66bb-4ff6-ae96-45902836f862",
                  }}
                />
            </View>
         </TouchableOpacity>
         <View>
           <Text style={styles.itemText}>Explora todo lo que sopetrán tiene para ofrecerte</Text>
         </View>
         <View>
            <FlatList 
             horizontal = {true}
             data={categorias}
             showsHorizontalScrollIndicator={false}
             renderItem={({item})=>(
                <ItemCategory key={item._id} item={item}/>
             )}
            />
         </View>
         <View>
           {
             negocios.map(item => (
               <ItemNegocio key={item._id}  item={item}/>
             ))
           }
         </View>
        </View>
        </ScrollView>   
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    containerInput : {
        flexDirection : 'row',
        alignItems : 'center',
        backgroundColor : '#ddd',
        padding : 6,
        marginTop : 8,
        marginHorizontal : 10,
        marginBottom : 2,
        borderRadius : 6

    },
    textPlaceholder : {
      paddingLeft : 5
    },
    image: {
        margin: 10,
        borderRadius: 10,
        width: 180,
        height: 128,
        aspectRatio: 5 / 3,
        resizeMode: "contain",
      },
      itemText :{
        fontSize : 17,
        fontWeight : '800',
        paddingHorizontal : 8,
        paddingVertical : 2
    },
    itemsCategories : {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 11,
    },
    safeAndroid :{
       paddingTop : Platform.OS==='android' ? 25 : 0
    }
})