import React from 'react';
import Axios from 'axios';
import List from '../components/list';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default ({navigation})=>{
    const isFocused=useIsFocused()
    const[items,setItems]=useState(null)
  useEffect(()=>{
    Axios.get('http://18.223.211.4/api/items/')
    .then(i=>{setItems(i.data.data);
    console.log(i.data.data)})
    .catch(e=>console.log(e))
  },[isFocused])
  if(items===null){return(<Text>Loading...</Text>)}
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shopping List</Text>
        <Button onPress={()=>navigation.navigate('Add')} color='blue' title="Add Item"/>
        <Button onPress={()=>navigation.navigate('Animation')} color="yellow" title="Animation"/>
        <List items={items}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    blue:{
      fontSize: 25,
      color:'lightblue',
    },
    title: {
      color: 'lightblue',
      fontSize: 45,
      marginTop: 25,
    },
  });