import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import DashboardNavigator from '../components/dashboard';
import Onboarding from '../components/onboarding';
import { requestUserPermission , notificationListener} from '../utils/notification';
const Stack = createStackNavigator();

const Root = () => {
  

  useEffect(()=>{
    requestUserPermission()
    notificationListener()
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Dashboard" component={DashboardNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
