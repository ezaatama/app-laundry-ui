import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, PesananScreen, AkunScreen, SplashScreen} from '../pages'
import { BottomNavigationBar } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigationBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Pesanan" component={PesananScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Akun" component={AkunScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      {/* hidden header */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
