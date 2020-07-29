import React from 'react';
import Form from '../components/form';
import { View, Text } from 'react-native';

export default ({navigation})=>{
    return(
        <View style={{flex:1,justifyContent:'space-evenly',alignItems:"center",flexDirection:"column"}}>
            <Text>Add a new Item</Text>
            <Form submit={()=>navigation.navigate('home')}/>
        </View>
    )
}