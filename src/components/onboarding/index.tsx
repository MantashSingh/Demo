import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from './forgotPassword';
import Login from './login';
import Register from "./register";

const Stack = createStackNavigator();
const Onboarding = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Onboarding;
