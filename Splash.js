import React, { Component } from 'react';
import { } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { createNavigationContainer} from 'react-navigation';
 

const config = {
  response_type: 'code',
  scope: 'openid profile offline_access',
  client_id: 'xxxxxxxxxxxxxx',
  client_secret:
    'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  redirect_uri: 'https://com.example',
  acr_values: 'http://oidc.contact.de',
  acr: 'default',
  prompt: 'consent login',
  authority: 'https://youroidcprovider',
};


export default class Splash extends Component {
  _getStarted() {
    
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }
  render() {
    return (

      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          
          <View style={styles.logoContainer}>
            <Text style={styles.title }>Task Tracker App</Text>
            <Image style={styles.logo} source={require('./src/images/new.png')} />
          </View>
        </View>

        
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Tasks')} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              Get Started
          </Text>
          </TouchableOpacity>

          
          <Text style={styles.subTitle}>Powered by Fasyl</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop:20,
    backgroundColor: '#2ed573',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subTitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
    textAlign:'center',
    justifyContent:'center'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#57606f',
    borderRadius: 15,
    height: 50,
    marginBottom: 10,
    padding:5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: 20,
    margin:10
  }
});
