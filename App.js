
import * as React from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './components/HomeTab';
import Task from './components/Task';
import MeMap from './components/MeMap';
import Products from './components/Prodcuts';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../phuong/components/image/home.png')}
              style={{width: 25, height: 26, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../phuong/components/image/notification2.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
      />
      <Tab.Screen
        name="MeMap"
        component={MeMap}
        options={{
          tabBarLabel: 'MeMap',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../phuong/components/image/map.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
        />
        <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../phuong/components/image/notification.png')}
              style={{width: 26, height: 30, }}
            />
          ),
        headerShown: false,
        }}
        />
      
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}