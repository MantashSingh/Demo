import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DashboardNavigator from '../components/dashboard';
import Onboarding from '../components/onboarding';

const Stack = createStackNavigator();

const Root = () => {
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
