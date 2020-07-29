import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Axios from "axios";
import { NavigationContainer } from "@react-navigation/native";

export default (props)=>{
    const [name,setName]=useState('')
    const [quantity,setQuantity]=useState('')
    const [errors,setErrors]=useState([])
    const hClick=()=>{
        Axios.post('http://localhost:8000/api/List')
        .then(()=>props.submit())
        .catch((e)=>{console.log(e)
        })
    }
    return(
        <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
            {errors.map((i,j)=>(
                <Text key={j}>{i}</Text>
            ))}
            <View>
                <Text>Item Name:</Text>
                <TextInput style={{borderWidth: 3,borderColor: 'grey', minWidth: 200, fontSize:30}} onChange={e=>setName(e)} autoCapitalize='sentences'></TextInput>
            </View>
            <View>
                <Text>Quantity:</Text>
                <TextInput keyboardType='decimal-pad' style={{borderWidth: 3,borderColor: 'grey', minWidth: 200, fontSize:30}}></TextInput>
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