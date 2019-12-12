import React, { Component,useState,
  useEffect, } from 'react';

import firebase from 'firebase';

import { Alert, Button, TextInput,AsyncStorage, View, StyleSheet,Image } from 'react-native';

const LoginScreen = (props) => {{
 
    //const email1,password1 = event.target.elements;
    _signInAsync = async () => {
        // await AsyncStorage.setItem('userToken', 'abc');
        console.log("logged in",email,password);
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => props.navigation.navigate('Main'))
       

        //props.navigation.navigate('Main');
      };

      _signUpAsync = async () => {
        // await AsyncStorage.setItem('userToken', 'abc');
        console.log("signed in",email,password);
        firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate('Main'))

      };

      const [ email, setemail ] = useState("");
      const [ password, setpassword ] = useState("");

      //const [ dataLoaded, setDataLoaded ] = useState(false);


    return (
      <View style={styles.container}>
          <View style={{paddingBottom : 10}}>
                  <Image
                    source={{ uri: 'https://ih0.redbubble.net/image.503922301.6502/flat,750x1000,075,t.u3.jpg' }}
                    style={{
                      
                      height: 200,
                      width: 400
                    }}
                  />
                </View>
        <TextInput
          name = "email1"
          placeholder={'Username'}
          style={styles.input}
          onChangeText={(username) => setemail(username)}
        />
        <TextInput
          name = "password1"
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(password) => setpassword(password)}

        />

<Button
          title={'Login'}
          color="black"
          style={{padding:5,width:300}}
         onPress={this._signInAsync}
        />
        
        <Button
          title={'Sign Up'}
          color="black"
          style={{padding:5,width : 300}}
         onPress={this._signUpAsync}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  '#000000',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'orange',
    marginBottom: 10,
    color:"#ffad33",
  },
});

export default LoginScreen;

LoginScreen.navigationOptions = {
    title: 'MELLOWWW',
    headerStyle: {
      backgroundColor: '#0a0a09',
    },
    headerTintColor: '#cc7a00',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };