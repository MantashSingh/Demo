import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Chat from './chat';
import Home from './home';
import More from './more';

const Tab = createBottomTabNavigator();

const DashboardNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={More} />
    </Tab.Navigator>
  );
};

export default DashboardNavigator;
