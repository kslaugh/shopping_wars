import React from 'react';
import Axios from 'axios';
import List from '../components/list';
import { useState,  useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default ({navigation})=>{
    const[items,setItems]=useState(null)
    const[refreshing,setRefreshing]=useState(false)
   useFocusEffect(
     useCallback(()=>{
         Axios.get('http://18.223.211.4/api/items/')
         .then(i=>{setItems(i.data.data)})
          .catch(e=>console.log(e))
     },[]))
     const hDetail=(id)=>{
      navigation.navigate('Detail',{id:id})
     }
     const hRefresh=()=>{
      setRefreshing(true);
      Axios.get('http://18.223.211.4/api/items/')
      .then(i=>{
        setItems(i.data.data);
        setRefreshing(false);
      })
      .catch(e=>console.log(e))
     }
  if(items===null){return(<Text>Loading...</Text>)}
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Shopping List</Text>
        <View style={{margin:10}}>
          <Button onPress={()=>navigation.navigate('Add')} color='blue' title="Add Item"/>
        </View>
        <List items={items} press={hDetail} refreshing={refreshing} refresh={hRefresh}/>
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