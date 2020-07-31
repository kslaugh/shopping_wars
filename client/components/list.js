import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';

export default (props)=>{
    console.log('loaded')
    return(
        <ScrollView style={{paddingVertical:20}}>
            {props.items.map((item,idx)=>(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",padding:5}} key={idx}>
                    <Text style={{color:'white'}}>{item.name}</Text>
                    <Text style={{color:'red'}}> ({item.quantity})</Text>
                </View>
            ))}
        </ScrollView>
    )
}