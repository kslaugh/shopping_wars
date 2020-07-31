import React from 'react';
import Create from './views/create';
import { StyleSheet, View, Text } from 'react-native';
import Home from './views/homePage';
import Animation from "./views/animation"
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { startClock } from 'react-native-reanimated';
import animation from './views/animation';
import Redirect from './views/redirect';

const Stack=createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{title:'The List'}}
            />
          <Stack.Screen
            name='Add'
            component={Create}
            options={{title:'Create'}}
            />
          <Stack.Screen
            name="Animation"
            component={animation}
          />
          <Stack.Screen
            name="Redirect"
            component={Redirect}
          />
        </Stack.Navigator>
        
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

