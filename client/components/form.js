import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, StyleSheet, View, Text, TextInput, Button } from "react-native";

export default (props)=>{
    const [name,setName]=useState(props.item?.name||'')
    const [quantity,setQuantity]=useState(props.item?.quantity.toString()||'')
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
                <View>
                    <Text>Item Name:</Text>
                    <TextInput value={name} style={{borderWidth: 3,borderColor: 'grey', minWidth: 200, fontSize:30}} onChangeText={e=>setName(e)} autoCapitalize='sentences'/>
                </View>
                <View>
                    <Text>Quantity:</Text>
                    <TextInput value={quantity} keyboardType='number-pad' onChangeText={e=>setQuantity(e)} style={{borderWidth: 3,borderColor: 'grey', minWidth: 200, fontSize:30}}/>
                </View>
                <Button color='black' onPress={()=>props.submit({'name':name,'quantity':quantity})} title='Submit'/>
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles=StyleSheet.create({
    horizontal:{
        flex:1,
        justifyContent: "space-evenly",
    },
});