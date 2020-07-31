import React from 'react';
import Form from '../components/form';
import { View, Text } from 'react-native';
import Axios from 'axios';

export default ({navigation})=>{
    const hSubmit=()=>{
        Axios.post('http://18.223.211.4/api/items/',{'name':name,'quantity':quantity})
        .then(()=>navigation.navigate("Home"))
        .catch(e=>console.log(e))
    }
    return(
        <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
            <Text>Add a new Item</Text>
            <Form submit={hSubmit}/>
        </View>
    )
}