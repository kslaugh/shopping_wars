import React from 'react';
import Axios from 'axios';
import List from '../components/list';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert } from 'react-native';

export default ({navigation})=>{
    const[items,setItems]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:8000/api/items')
    .then(i=>setItems(i.data))
    .catch(e=>console.log(e))
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>

      <Button onPress={()=>navigation.navigate('Add')} color='blue' title="Add Item"/>
      <Button onPress={()=>navigation.navigate('Animation')} color="yellow" title="Animation"/>

      <List items={items}/>
    </View>
  );
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