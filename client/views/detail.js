import React, { useEffect } from 'react';
import { Text, View , Button} from 'react-native';
import Axios from 'axios';
import {useState} from 'react';
import FadeIn from "../components/fadeIn";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';




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
            <FadeIn style={{flex: 1, alignItems: 'center', justifyContent: "center", flexDirection:'column'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.name} </Text>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>{item.quantity} </Text>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Edit',{id:item.id})}>
              <View style={{backgroundColor:"#2196F3", padding:5, borderRadius:10, width:100, alignItems:"center"}}>
                <Text style={{fontSize:20, color:'white'}}>Edit</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={handleDelete}>
              <View style={{backgroundColor:"red", padding:5, borderRadius:10, width:100, marginTop:10, alignItems:"center"}}>
                <Text style={{fontSize:20, color:'white'}}>Delete</Text>
              </View>
            </TouchableWithoutFeedback>
            </FadeIn>
      </View>
    )
  }