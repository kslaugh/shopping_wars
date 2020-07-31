import React from 'react';
import {Text} from 'react-native';

export default ({navigation})=>{
    const hLoad=()=>{navigation.navigate('Home')}
    return(
        <Text onPress={hLoad()}>Loading...</Text>
    )
}