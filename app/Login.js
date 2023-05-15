import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { api_key } from './api_key';


const Login = ({navigation}) => {
  const [user_name, setUserName] = useState();
  const [passwd, setPasswd] = useState();
  
  const [state, setState] = useState(true);
  const managePasswordVisibility = ()=>{
    setState(!state);
  }
  const login = async  ()=>{
    try {
      payload = {
        "_id": user_name,
        "User_Password": passwd
      }
      const response = await fetch('http://192.168.0.83:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'key': api_key },
        body: JSON.stringify(payload)
      });
      const json = await response.json();
      if (json.status==0) {
        navigation.navigate('Index', json.response);
      }else if (json.status==1){
        alert("INVALID USERNAME OR PASSWORD")
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
    
  }


  return (
    <View style={styles.container}>
     
    <Image source={require('../assets/images/image.png')} style={styles.logoImage}></Image>
    <Text style={styles.titleHeading}>B L O O D</Text>
    <ScrollView style={{width: '100%'}}>
    <View style={styles.container}>
    {/* <ImageBackground source={require('./assets/images/image.png')} style={styles.backgroundImage}> */}
      <TextInput style={styles.userCredentials} onChangeText={setUserName}  placeholder='User Name' returnKeyType='next' id='username'/>
      <View style={{width: '100%', alignItems: 'center'}}>
      <TextInput style={styles.userCredentials} onChangeText={setPasswd} placeholder='Password' autoCompleteType='password' secureTextEntry={state}  id='password'/>
      <TouchableOpacity
                  activeOpacity={0.8}
                  style={{alignSelf: 'baseline', marginLeft: '75%', marginTop: '4%',
                   alignItems: 'center', position: 'absolute', borderRadius: 20}}
                  onPress={managePasswordVisibility}>
                  <Image
                  style={{width: 20, height:20}}
                    source={
                      state
                        ? require('../assets/images/show.png')
                        : require('../assets/images/hide.png')
                    }
                  />
                </TouchableOpacity>
                </View>
      <TouchableOpacity style={styles.loginbtn} onPress={login}>
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