import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

export default (props)=>{
    const [items,setItems]=useState(props.items)
    return(
        <ScrollView>
            {items.map((item,idx)=>(
                <View key={idx}>
                    <Text>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}