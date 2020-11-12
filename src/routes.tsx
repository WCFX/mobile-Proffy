import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screen/Home';

const { Navigator, Screen } = createStackNavigator();

export default function routes(){
  return(
    <NavigationContainer>
      <Navigator>
        <Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home} />
      </Navigator>
    </NavigationContainer>  
  )
}