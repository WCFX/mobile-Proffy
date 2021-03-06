import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screen/Home';
import GiveClasses from '../screen/GiveClasses';
import Login from '../screen/Login';
import Registration from '../screen/Registration';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

export default function routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Login" component={Login} />
        <Screen name="Registration" component={Registration} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>  
  )
}