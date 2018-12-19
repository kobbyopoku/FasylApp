import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firebase from 'firebase';
export default class DatabaseComponent extends Component {

  componentWillMount = () => {


    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA1hNwI2jPNamm8IKOzwOXarDh9SEJuOKE",
      authDomain: "fasyl-app.firebaseapp.com",
      databaseURL: "https://fasyl-app.firebaseio.com",
      projectId: "fasyl-app",
      storageBucket: "fasyl-app.appspot.com",
      messagingSenderId: "1099219513580"
    };
    firebase.initializeApp(config);

    const rootRef = firebase.database().ref();
    const animalRef = rootRef.child('tasks');

  }

  constructor(props) {
    super(props);

    this.state = ({
      tasks: [],
      taskName: '',
      startdate: '',
      enddate: '',
      loading: false
    });

  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
