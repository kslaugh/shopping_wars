import React from 'react';
import Form from '../components/form';
import { TouchableWithoutFeedback, Keyboard, View, Text,StyleSheet } from 'react-native';
import Axios from 'axios';
import FadeIn from "../components/fadeIn";

export default ({navigation})=>{
    const hSubmit=(e)=>{
        Axios.post('http://18.223.211.4/api/items/',e)
        .then(()=>navigation.navigate("Home"))
        .catch(e=>console.log(e))
    }
    return(
        
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            
                <View  style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column", backgroundColor:"black"}}>
                    <FadeIn>
                        <Text style={{fontSize: 28,fontWeight:"bold" ,textAlign: 'center', margin: 10, color:"lightblue"}}>Add to Shopping List</Text>
                        <Form submit={hSubmit}/>
                    </FadeIn>
                </View>
           
        </TouchableWithoutFeedback>
        
    )
}

