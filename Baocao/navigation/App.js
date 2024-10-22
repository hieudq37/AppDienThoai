import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Welcome, Login, Register, MobileList, ProductGridView, Settings, Cart} from '../screens'
import UITab from './UITab';
const Stack = createNativeStackNavigator()
function App(props)
{
    return(   <NavigationContainer>
        {/* nhiều màn hình qua lại với chắc */}
        {/* chọn cáy mô đầu tiên */}
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}> 
        {/* bên trên tắt tên */}
            <Stack.Screen name={'Welcome'} component={Welcome} />
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Register'} component={Register} />
            <Stack.Screen name={'UITab'} component={UITab} />
            <Stack.Screen name={'Cart'} component={Cart}/>
        </Stack.Navigator>
    </NavigationContainer>)
}

export default App