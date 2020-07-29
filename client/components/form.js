import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default ()=>{
    const [name,setName]=useState('')
    const [quantity,setQuantity]=useState('')
    return(
        <View style={styles.horizontal}>
            <Text>Name:</Text>
            <TextInput autoCapitalize='sentences'></TextInput>
        </View>
    )
}
const styles=StyleSheet.create({
    horizontal:{
        flex:1,
        justifyContent: "space-evenly",
    },
});