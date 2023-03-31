import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';


const Login = ({navigation}) => {
  const [user_name, setUserName] = useState("Demo");
  const [passwd, setPasswd] = useState();
  
  const [state, setState] = useState(true);
  const managePasswordVisibility = ()=>{
    setState(!state);
  }



  return (
    <View style={styles.container}>
     
    <Image source={require('../assets/images/image.png')} style={styles.logoImage}></Image>
    <Text style={styles.titleHeading}>B L O O D</Text>
    <ScrollView style={{width: '100%'}}>
    <View style={styles.container}>
    {/* <ImageBackground source={require('./assets/images/image.png')} style={styles.backgroundImage}> */}
      <TextInput style={styles.userCredentials}  placeholder='User Name' returnKeyType='next' id='username'/>
      <TextInput style={styles.userCredentials} placeholder='Password' autoCompleteType='password' secureTextEntry={state}  id='password'/>
      <TouchableOpacity
                  activeOpacity={0.8}
                  style={{backgroundColor: '#AF0404', padding: '2%', borderRadius: 20}}
                  onPress={managePasswordVisibility}>
                  <Text style={{color: 'white'}}>
                  <Image
                  style={{width: 25, height:25}}
                    source={
                      state
                        ? require('../assets/images/show.png')
                        : require('../assets/images/hide.png')
                    }
                  />   {state? "Show Password": "Hide Password"}</Text>
                </TouchableOpacity>
      <TouchableOpacity style={styles.loginbtn} onPress={()=> navigation.navigate('Index', {username: user_name})}>
        <Text style={{color: 'white', fontSize: 20}}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccount}  onPress={()=> navigation.navigate('SignUp')}>
        <Text style={{color: 'white', fontSize: 20}}>
          Create Account
        </Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      {/* </ImageBackground> */}
  </View>
  );
}

  
export default Login