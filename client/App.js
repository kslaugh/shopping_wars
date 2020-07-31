import React from 'react';
import Create from './views/create';
import { StyleSheet, View, Text } from 'react-native';
import Home from './views/homePage';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "./views/detail"
import Edit from "./views/edit"

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
            name="Detail"
            component={Detail}
            options={{title:'Detail'}}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{title:'Edit'}}
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

