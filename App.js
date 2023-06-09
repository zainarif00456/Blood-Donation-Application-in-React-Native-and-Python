import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Login from './app/Login';
import Index from './app/Index';
import SignUp from './app/SignUp';
import UserDetails from './app/UserDetails';
import StartUp from './app/StartUp';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartUp'>
      <Stack.Screen name='StartUp' component={StartUp} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Index' component={Index} options={{title: 'Home', headerShown: false, } }/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: true}}/>
        <Stack.Screen name='UserDetails' component={UserDetails} options={{headerShown: true, title: 'Donor Information'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  
// });
