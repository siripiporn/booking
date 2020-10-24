
import React from 'react';
import { Image,Platform,Dimensions  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/homeScreen'
 
 
import Main from '../src/register/main'
import LoginScreen from '../src/register/LoginScreen'
import RegisterScreen from '../src/register/RegisterScreen'
import ForgotPassword from '../src/register/ForgotPassword'
import Service from '../src/Service'
import Doctor from '../src/doctor'
import Promotion from '../src/promotion'
import Branch from '../src/branch'
import SelectDoctor from '../src/selectDoctor'
import Booking from '../src/booking'
import ConfirnBooking from '../src/confirnBooking'

//var deviceHeight = Dimensions.get('window').height;
//var deviceWidth = Dimensions.get('window').width;

 const Stack = createStackNavigator()
//const Tab = createBottomTabNavigator();


export default Navigator = () => {
  return (

    <Stack.Navigator initialRouteName="LoginScreen"
      screenOptions={{ gestureEnabled: false }}>
    {/* Home */}
    <Stack.Screen name='Main'  component={Main} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='LoginScreen'  component={LoginScreen} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {  shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='ForgotPassword'  component={ForgotPassword} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {  shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='RegisterScreen'  component={RegisterScreen} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {  shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='HomeScreen'  component={HomeScreen} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='Service'  component={Service} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='Doctor'  component={Doctor} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='Promotion'  component={Promotion} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='Branch'  component={Branch} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='SelectDoctor'  component={SelectDoctor} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='Booking'  component={Booking} options={{title: 'Booking', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    <Stack.Screen name='ConfirnBooking'  component={ConfirnBooking} options={{title: 'Confirn Booking', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
    
    
    </Stack.Navigator>
  )
}