import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, StyleSheet, View, Text, TextInput, Button } from "react-native";

export default (props)=>{
    const [name,setName]=useState(props.item?.name||'')
    const [quantity,setQuantity]=useState(props.item?.quantity.toString()||'')
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
                <View>
                    <Text style={{fontSize: 20, fontWeight:"bold",textAlign: 'center', margin: 10, color:"lightblue"}}>Item Name:</Text>
                    <TextInput value={name} style={{borderWidth: 3,backgroundColor:"white", borderColor: 'blue', minWidth: 200, fontSize:30}} onChangeText={e=>setName(e)} autoCapitalize='sentences'/>
                </View>
                <View>
                    <Text style={{fontSize: 20,fontWeight:"bold", textAlign: 'center', margin: 10, color:"lightblue"}}>Quantity:</Text>
                    <TextInput value={quantity} keyboardType='number-pad' onChangeText={e=>setQuantity(e)} style={{borderWidth: 3,backgroundColor:"white",borderColor: 'blue', minWidth: 200, fontSize:30}}/>
                </View>
                <TouchableWithoutFeedback color='black' onPress={()=>props.submit({'name':name,'quantity':quantity})} title='Submit'>
                    <View style={{backgroundColor:"blue", padding:5, borderRadius:10, width:100, marginTop:10, alignItems:"center"}}>
                        <Text style={{fontSize:20,fontWeight:"bold",color:'white'}}>Submit</Text>
                    </View>
                </TouchableWithoutFeedback>
                
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