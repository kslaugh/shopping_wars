import React, {useCallback,useState} from 'react';
import Form from '../components/form';
import { TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import Axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';




export default function Edititem ({route,navigation}){
    const [item, setItem]=useState(null)
    useFocusEffect(
        useCallback(()=>{
            Axios.get('http://18.223.211.4/api/items/'+ route.params.id)
            .then(i=>{setItem(i.data)})
             .catch(e=>console.log(e))
        },[route]))


    function hClick (event){
        Axios.put("http://18.223.211.4/api/items/"+route.params.id,event)
        .then(()=>navigation.navigate("Home"))
        .catch(e=>console.log(e))
    }
    if(item===null) return <Text>"loading...."</Text>
    
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Edit Your Shopping Item</Text>
                <Form item={item} submit={hClick}/>
            </View>
        </TouchableWithoutFeedback>
    )

}