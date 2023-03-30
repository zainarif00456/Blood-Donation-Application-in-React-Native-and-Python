import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#252525',
    },
    titleHeading: {
      fontSize: 50,
      fontWeight: 'bold',
      color: 'red',
      textAlign: 'center',
    },
    userCredentials: {
      width: '80%',
      margin: '5%',
      fontSize: 14,
    //   backgroundColor: '#AF0404',
    borderBottomWidth: 1,
    //   padding: '4%',
      borderBottomColor: '#AF0404',
    //   borderRadius: 10,
      color: 'white',
      opacity: 0.8,
    },
    logoImage:{
      marginTop: '10%',
    },
    loginbtn: {
      width: '50%',
      backgroundColor: '#AF0404',
      padding: '4%',
      marginTop: '10%',
      borderRadius: 20,
      alignItems: 'center',
      opacity: 0.8
    },
    createAccount:{
      width: '70%',
      backgroundColor: '#0862c2',
      padding: '4%',
      marginTop: '5%',
      borderRadius: 20,
      alignItems: 'center',
      opacity: 0.8,
    },
    inputFields: {
        width: '80%',
        margin: '5%',
        // backgroundColor: '#AF0404',
        borderBottomWidth: 1,
        borderBottomColor: '#AF0404',
        // padding: '4%',
        // borderRadius: 10,
        color: 'white',
        // opacity: 0.8
      },
      bloodgroupField: {
        width: '80%',
        marginTop: '5%',
        backgroundColor: '#AF0404',
        padding: '4%',
        borderRadius: 10,
        color: 'white',
      },
      signup:{
        width: '70%',
        backgroundColor: '#0862c2',
        padding: '4%',
        marginTop: '5%',
        borderRadius: 20,
        alignItems: 'center',
        opacity: 0.8,
        marginBottom: '5%',
      },
      
      
  });


  export default styles