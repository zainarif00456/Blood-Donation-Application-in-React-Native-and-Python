import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Login from './app/Login';
import Index from './app/Index';
import SignUp from './app/SignUp';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Index' component={Index} options={{title: 'Home', headerShown: false, headerStyle: {backgroundColor: '#252525'}, headerTintColor: 'white'} }/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: true, headerStyle: {backgroundColor: '#252525'}, headerTintColor: 'white'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  
// });
