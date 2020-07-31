import React, { useEffect } from 'react';
import { Text, View , Button} from 'react-native';
import Axios from 'axios';
import {useState} from 'react';
import FadeIn from "../components/fadeIn";




  export default ({route, navigation})=>{
    const [item,setItem]=useState(null)
    useEffect(()=>{
        Axios.get("http://18.223.211.4/api/items/"+route.params.id)
        .then(response=>{
            setItem(response.data);
        });
    },[route.params.id]);

    const handleDelete=(e)=>{
      Axios.delete("http://18.223.211.4/api/items/"+route.params.id)
      .then(()=>navigation.navigate('Home'))
      .catch(e=>console.log(e))
  }

    if(item===null) return <Text>"loading...."</Text>
    
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
            <FadeIn >
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.name} </Text>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.quantity} </Text>
            </FadeIn>
            <Button style={{fontSize:20}} onPress={handleDelete} title='Delete'/>
            <Button onPress={()=>navigation.navigate('Edit',{id:item.id})} color="orange" title="Edit"/>
      </View>
    )
  }