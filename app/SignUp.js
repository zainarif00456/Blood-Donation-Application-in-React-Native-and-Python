import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, StatusBar, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/styles';
import { api_key } from './api_key';


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
    const [address, setAddress] = useState("");
    const [username, setUserName] = useState("");
    const [passwd, setPassword] = useState("");
    const [confirmpasswd, setConfirmPassword] = useState("");
    // Function for registering users
    const createAccount =async () => {
      if(fullname===""){
        Alert.alert('Missing Entries', 'Please Enter all Entries');
      }
      else{
        payload = {
          Full_Name: fullname,
          Blood_Group: blood,
          Date_of_Birth: dob,
          Phone_No: phone,
          Home_Address: address,
          User_Name: username,
          User_Password: passwd,
          _id: username
        }
        try {
          const response = await fetch('http://192.168.0.83:5000/createaccount', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'key': api_key },
            body: JSON.stringify(payload)
          });
          const json = await response.json();
          if (json.status==0) {
            navigation.navigate('Index', {username: json.response});
          }
          else if (json.status == 1){
            alert("User with this user name already exists. Try a different user name")
          }
        } catch (error) {
          console.error(error);
          alert(error.message);
        }
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
        <TextInput style={styles.inputFields} onChangeText={setFullname} placeholder='Full Name' id='fullname'/>
        {/* <TextInput style={styles.inputFields} onChangeText={setCNIC} placeholder='CNIC' keyboardType='numeric' maxLength={13} id='cnic' /> */}
        <SelectDropdown dropdownStyle={styles.bloodgroupField} onSelect={setBlood} id={'bloodgroup'} rowTextStyle={{color:'white'}}
        buttonTextStyle={{color: 'white'}} buttonStyle={styles.bloodgroupField} data={bloodGroups} />

        <TextInput style={styles.inputFields} placeholder='Date of Birth (DD-MM-YYYY)' onChangeText={setDOB} id='dob' />
        <TextInput style={styles.inputFields} placeholder='Phone No' id='phone' maxLength={11} onChangeText={setPhone} keyboardType='numeric' />
        <TextInput style={styles.inputFields} onChangeText={setAddress} placeholder='Home Address' id='address'/>
        {/* <TextInput style={styles.inputFields} placeholder='Email-Address' id='email' keyboardType='email-address' onChangeText={setEmail} /> */}
        <TextInput style={styles.inputFields} placeholder='User Name' id='user' onChangeText={setUserName}/>
        <View style={{width: '100%', alignItems: 'center'}}>
      <TextInput style={styles.userCredentials} placeholder='Password' onChangeText={setPassword} autoCompleteType='password' secureTextEntry={state}  id='password'/>

                </View> 
                <View style={{width: '100%', alignItems: 'center'}}>
      <TextInput style={styles.userCredentials} placeholder='Confirm Password' onChangeText={setConfirmPassword} autoCompleteType='password' secureTextEntry={state}  id='confirmpassword'/>
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



