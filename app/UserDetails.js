import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UserDetails({navigation}) {
  return (
    <View style={{width: '100%', flex: 1}}>

    
    <View style={styles.container}>
      <View style={styles.bloodGroupbtn}>
        <Text style={{textAlign: 'center', color: 'red', fontSize: 40}}>
          AB+
        </Text>
      </View>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: '#AF0404',
    // borderTopLeftRadius: 150,
  },
  bloodGroupbtn: {
    backgroundColor: 'white',
    width: '50%',
    height: '80%',
    alignItems: 'center',
    // position: 'absolute',
    marginTop: '25%',
    marginLeft: '25%',
    padding: '15%',
    borderRadius: 250

  }
});