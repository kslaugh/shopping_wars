import React, { useRef, useEffect } from 'react';
import { Animated, Text, View , Button} from 'react-native';
import Axios from 'axios';
import {useState} from 'react';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
      ).start();
    }, [fadeAnim])
    
    return (
      <Animated.View                
      style={{
        ...props.style,
        opacity: fadeAnim,  
      }}
      >
        {props.children}
      </Animated.View>
    );
  }
  
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
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'yellow'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.name} </Text>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.quantity} </Text>
          <Button onPress={handleDelete}>Delete</Button>
        </FadeInView>
      </View>
    )
  }