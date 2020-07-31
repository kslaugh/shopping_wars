import React, { useRef, useEffect } from 'react';
import { Animated, Text, View , Button} from 'react-native';
import Axios from 'axios';
import {useState} from 'react';
import FadeIn from "../componets/fadeIn"


  export default (props)=>{
    const [item,setItem]=useState(null)
    useEffect(()=>{
        Axios.get("http://18.223.211.4/api/items/"+props.id)
        .then(response=>setItem(response.data));
    },[props.id]);

    const handleDelete=(e)=>{
      Axios.delete("http://18.223.211.4/api/items/"+e.target.value)
      .then(()=>navigator.navigate('/'))
      .catch(e=>console.log(e))
  }

    if(item===null) return "loading...."
    
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeIn style={{width: 250, height: 50, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.name} </Text>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.quantity} </Text>
          <Button onPress={handleDelete}>Delete</Button>
        </FadeIn>
      </View>
    )
  }