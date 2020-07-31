import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, RefreshControl } from 'react-native';

export default (props)=>{
    return(
        <ScrollView refreshControl={
            <RefreshControl refreshing={props.refreshing} onRefresh={props.refresh}/>
        }>
            {props.items.map((item,idx)=>(
                <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",padding:5, borderColor:'grey',borderWidth:1, borderRadius:10,margin:2}} key={idx}>
                    <Text onPress={()=>{props.press(item.id)}} style={{color:'white', fontSize:20}}>{item.name}</Text>
                    <Text style={{color:'red',fontSize:13}}>     ( {item.quantity} )</Text>
                </View>
            ))}
        </ScrollView>
    )
}