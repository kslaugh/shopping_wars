import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, RefreshControl } from 'react-native';

export default (props)=>{
    return(
        <ScrollView refreshControl={
            <RefreshControl refreshing={props.refreshing} onRefresh={props.refresh}/>
        }>
            {props.items.map((item,idx)=>(
                <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",padding:5}} key={idx}>
                    <Text onPress={()=>{props.press(item.id)}} style={{color:'white'}}>{item.name}</Text>
                    <Text style={{color:'red'}}> ({item.quantity})</Text>
                </View>
            ))}
        </ScrollView>
    )
}