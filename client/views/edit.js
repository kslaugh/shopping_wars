import React, {useCallback,useState} from 'react';
import Form from '../components/form';
import { View, Text } from 'react-native';
import Axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';




export default function Edititem ({route,navigation}){
    const [item, setItem]=useState(null)
    console.log('test')
    
    useFocusEffect(
        useCallback(()=>{
            console.log(route.params.id)
            Axios.get('http://18.223.211.4/api/items/'+ route.params.id)
            .then(i=>{setItem(i.data)})
             .catch(e=>console.log(e))
        },[route]))


    function hClick (event){
        Axios.put("http://18.223.211.4/api/items/"+id,event)
        .then(()=>navigation.navigate("Home"))
        .catch(e=>console.log(e))
    }
    if(item===null) return "loading...."
    
    
    return(
        <View>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Edit Your Shopping Item</Text>
            <Form item={item} onPress={hClick}/>
        </View>
    )

}