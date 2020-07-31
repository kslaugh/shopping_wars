import React, { useRef, useEffect, useState } from 'react';
import { Animated} from 'react-native';


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const [name,setName]=useState(props.item?.name || '')
    const [quantity,setQuantity]=useState(props.item?.quantity || '')
    
    
    const handleClick=(e) =>{
        props.onClick({
            name,quantity
        })
    }
    
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
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
          {props.name}
          {props.quantity}
        </Animated.View>
      );
    }
    
export default FadeInView