import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Axios from "axios";
import { NavigationContainer } from "@react-navigation/native";

export default (props)=>{
    const [name,setName]=useState('')
    const [quantity,setQuantity]=useState('')
    const hClick=()=>{
        Axios.post('http://18.223.211.4/api/items/',{'name':name,'quantity':quantity})
        .then(props.submit)
        .catch(e=>console.log(e))
    }
    return(
        <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
            <View>
                <Text>Item Name:</Text>
                <TextInput style={{borderWidth: 3,borderColor: 'grey', minWidth: 200, fontSize:30}} onChangeText={e=>setName(e)} autoCapitalize='sentences'></TextInput>
            </View>
            <View>
                <Text>Quantity:</Text>
                <TextInput keyboardType='number-pad' onChangeText={e=>setQuantity(e)} style={{borderWidth: 3,borderColor: 'grey', minWidth: 200, fontSize:30}}></TextInput>
            </View>
            <Button color='black' onPress={hClick} title='Submit'/>
        </View>
    )
}
const styles=StyleSheet.create({
    horizontal:{
        flex:1,
        justifyContent: "space-evenly",
    },
});