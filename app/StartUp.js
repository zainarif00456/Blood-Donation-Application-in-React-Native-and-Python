import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const StartUp = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.designContainer}>
        <Image source={require('../assets/images/image.png')} style={{marginTop: "15%"}}></Image>
      <TouchableOpacity style={styles.signinbtn} onPress={()=> navigation.navigate('Login')}>
        <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}} >
            Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginbtn} onPress={()=> navigation.navigate('SignUp')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}} >
            Create Account
        </Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f02446'
    },
    designContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#AF0404',
        borderTopLeftRadius: 150,
        borderBottomRightRadius: 150
    },
    signinbtn: {
        backgroundColor: '#ffffff',
        marginTop: '55%',
        padding: 25,
        opacity: 0.8,
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
    },
    loginbtn: {
        backgroundColor: 'transparent',
        marginTop: '4%',
        padding: 25,
        opacity: 0.8,
        alignItems: 'center',
        width: '85%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white'
    }
});


export default StartUp