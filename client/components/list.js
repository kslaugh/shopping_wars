import React from 'react';
import { ScrollView, View, Text, RefreshControl, TouchableWithoutFeedback, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default (props)=>{
    const items=props.items
    const animValues={};
    items.map((i,idx)=>{
        animValues[idx]=new Animated.Value(0)
    })
    // const animValues=useRef(Animated.Value(0)).current

    const animate=()=>{
        const createAnimation=(value)=>{
            return Animated.timing(value,{
                toValue:1,
                duration:props.fadeTiming||500,
                useNativeDriver: false
            })
        }
        const animations=[];
        items.map((i,idx)=>{
            animations.push(createAnimation(animValues[idx]))
        })

        Animated.stagger(props.stagger||100,animations).start()
    }
    useFocusEffect(()=>{
        animate();
    },[])

    return(
        <ScrollView refreshControl={
            <RefreshControl refreshing={props.refreshing} onRefresh={props.refresh}/>
        }>
            {props.items.map((item,idx)=>(
                <Animated.View
                    style={{
                        ...props.style,
                        opacity: animValues[idx],  
                    }} key={idx}>
                    <TouchableWithoutFeedback onPress={()=>{props.press(item.id)}} >
                        <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",padding:5, borderColor:'grey',borderWidth:1, borderRadius:10, margin:2}}>
                            <Text style={{color:'white', fontSize:20}}>{item.name}</Text>
                            <Text style={{color:'red',fontSize:13}}>     ( {item.quantity} )</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>
            ))}
        </ScrollView>
    )
}