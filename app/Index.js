import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from '../assets/profile.png';
// Tab ICons...
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
// Menu
import menu from '../assets/menu.png';
import close from '../assets/close.png';

// Photo
import photo from '../assets/photo.jpg';
import { ScrollView } from 'react-native-gesture-handler';

import { FontAwesome5 } from '@expo/vector-icons';


export default function Index({navigation}) {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const animation = () => {
    // Do Actions Here....
    // Scaling the view...
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  
    Animated.timing(offsetValue, {
      // YOur Random Value...
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  
    Animated.timing(closeButtonOffset, {
      // YOur Random Value...
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true
    })
      .start()
  
    setShowMenu(!showMenu);
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15}}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Jenna Ezarik</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home, animation, navigation)}
          {TabButton(currentTab, setCurrentTab, "Search for Donors", search, animation, navigation)}
          {TabButton(currentTab, setCurrentTab, "Notifications", notifications, animation, navigation)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings, animation, navigation)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout, animation, navigation)}
        </View>

      </View>

      {
        // Over lay View...
      }

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={animation}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 25,

            }}></Image>

          </TouchableOpacity>

          {/* <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text> */}
         {/* Conditional rendering of screens */}
         {(() => {
              if (currentTab == 'Home'){
                
                  return (
                      // <Home navigation={navigation}/>
                      <Text>Home Screen</Text>
                  )
              }
              else if (currentTab == 'Search for Donors'){
                return (<Search navigation={navigation}/>)
              }

              else if (currentTab == 'Notifications'){
                return (
                 <Text>Notifications</Text>
                )
              }
              return null
            })()}


        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

// For multiple Buttons in side menu...
const TabButton = (currentTab, setCurrentTab, title, image, animation, navigation) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Loggin out. Go back to Login screen
        navigation.navigate("Login")

      } else {
        setCurrentTab(title)
       animation();
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

// Screens to render with click of button
const Search = (props)=>{

  renderButtons = (navigation) => {
    const details = [];
    for( let i = 0; i < 10; i++) {
      details.push(
        <TouchableOpacity id={"detail"+i} style={{width: '100%', padding: '5%', backgroundColor: '#000066', marginTop: '5%',
        borderRadius: 10
        }} onPress={()=> navigation.navigate('UserDetails')}>
         <View style={{width: '60%', padding: '5%', backgroundColor: 'red',
         borderRadius: 200, alignItems: 'center'
        
        }}>
          <Text style={styles.userDetails}>
            Name: Zain Ul Abdeen
          </Text>
          <Text style={styles.userDetails}>
            --------------------------------
          </Text>
          <Text style={styles.userDetails}>
            Contact: 03114294867
          </Text>
          <Text style={styles.userDetails}>
            --------------------------------
          </Text>
          </View>
          <Text style={{fontSize: 30, textAlign: 'center', backgroundColor: 'white', height: '100%', width: '65%',
          padding:'7%', fontWeight: 'bold', 
          borderRadius: 250,
           color: 'red', position: 'absolute', marginLeft: '70%',
          marginTop: '5%', 
        }}>
            AB+
          </Text>
        </TouchableOpacity>
    
      )
    }
    return details;
  }

  return (
    <View style={{width: '100%'}}>
    <Text style={{fontSize: 30, textAlign: 'center', color: '#AF0404', fontWeight: 'bold'}}>
      Donors Available
    </Text>
    <ScrollView style={{width: '100%'}}>
      {renderButtons(props.navigation)}
    </ScrollView >
      
        
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AF0404',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  userDetails: {
    color: '#FFFFFF',
  },
 



});
