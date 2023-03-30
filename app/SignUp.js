import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, StatusBar, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles';


export default function SignUp({navigation, route}) {
    const bloodGroups = [
        'A+',
        'A-',
        'B+',
        'B-',
        'O+',
        'O-',
        'AB+',
        'AB-',
      ];
    const [fullname, setFullname] = useState("");
    const [cnic, setCNIC] = useState("");
    const [blood, setBlood] = useState("");
    const [dob, setDOB] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [passwd, setPassword] = useState("");
    const [confirmpasswd, setConfirmPassword] = useState("");
    // Function for registering users
    const createAccount = () => {
      if(fullname===""){
        Alert.alert('Full Name', 'Please enter Full Name');
      }
    }
    const [state, setState] = useState(true);
  const managePasswordVisibility = ()=>{
    setState(!state);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titleHeading}>Create a New BLOOD Account</Text>
      <ScrollView style={{width: '100%'}}>
        <View style={styles.container}>
        <TextInput style={styles.inputFields} onChangeText={setFullname} placeholder='Full Name' id='fullname' placeholderTextColor={'white'}/>
        <TextInput style={styles.inputFields} onChangeText={setCNIC} placeholder='CNIC' keyboardType='numeric' maxLength={13} id='cnic' placeholderTextColor={'white'}/>
        <SelectDropdown dropdownStyle={styles.bloodgroupField} onSelect={setBlood} id={'bloodgroup'} rowTextStyle={{color:'white'}}
        buttonTextStyle={{color: 'white'}} buttonStyle={styles.bloodgroupField} data={bloodGroups} />

        <TextInput style={styles.inputFields} placeholder='Date of Birth (DD-MM-YYYY)' onChangeText={setDOB} id='dob' placeholderTextColor={'white'}/>
        <TextInput style={styles.inputFields} placeholder='Phone No' id='phone' maxLength={11} onChangeText={setPhone} keyboardType='numeric' placeholderTextColor={'white'}/>
        <TextInput style={styles.inputFields} placeholder='Email-Address' id='email' keyboardType='email-address' onChangeText={setEmail} placeholderTextColor={'white'}/>
        <TextInput style={styles.inputFields} placeholder='User Name' id='user' placeholderTextColor={'white'} onChangeText={setUserName}/>
        <TextInput style={styles.inputFields} autoCompleteType='password' secureTextEntry={state} placeholder='Password' id='passwd' autoCorrect={false} onChangeText={setPassword} placeholderTextColor={'white'}/>
        <TextInput style={styles.inputFields} autoCompleteType='password' secureTextEntry={state} placeholder='Confirm Password' id='passwd' autoCorrect={false} onChangeText={setConfirmPassword} placeholderTextColor={'white'}/>
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
        <TouchableOpacity style={styles.signup} onPress={()=> createAccount()}>
            <Text style={{color: 'white'}}>
                Submit
            </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
}



