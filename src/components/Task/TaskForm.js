import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import firebase from 'firebase'

const appConfig = {
  apiKey: "AIzaSyA1hNwI2jPNamm8IKOzwOXarDh9SEJuOKE",
  authDomain: "fasyl-app.firebaseapp.com",
  databaseURL: "https://fasyl-app.firebaseio.com",
  projectId: "fasyl-app",
  storageBucket: "fasyl-app.appspot.com",
  messagingSenderId: "1099219513580",
  persistence: true
}

const taskApp = firebase.initializeApp(
  appConfig
)

const rootRef = firebase.database().ref();
const taskRef = rootRef.child('tasks');
export default class TaskForm extends Component {
  componentWillMount = () => {


    // // Initialize Firebase
    // var config = {
    //   apiKey: "AIzaSyA1hNwI2jPNamm8IKOzwOXarDh9SEJuOKE",
    //   authDomain: "fasyl-app.firebaseapp.com",
    //   databaseURL: "https://fasyl-app.firebaseio.com",
    //   projectId: "fasyl-app",
    //   storageBucket: "fasyl-app.appspot.com",
    //   messagingSenderId: "1099219513580"
    // };
    // firebase.initializeApp(config);


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

  _onPressAdd = () => {
    var taskCounter = 0
    // while (taskCounter ) {
    if (this.state.taskName.trim() === '' || this.state.startdate.trim() === '') {
      alert('Task data is empty')
    } else {
      taskRef.push({
        taskName: this.state.taskName,
        startdate: this.state.startdate,
        enddate: this.state.enddate
      }),
        alert('successful')
    }
    taskCounter++;
    // }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Task Name"
          style={styles.input}
          returnKeyType="next"
          keyboardType="default"
          onChangeText={(text) => this.setState({ taskName: text })}
          onSubmitEditing={() => this.passwordInput.focus()}
          value={this.state.taskName}
        />

        <TextInput
          placeholder="Start Date"
          keyboardType='numbers-and-punctuation'
          style={styles.input}
          returnKeyType="next"
          ref={(input) => this.passwordInput = input}
          onChangeText={(text) => this.setState({ startdate: text })}
          value={this.state.startdate}
        />

        <TextInput
          placeholder="End Date"
          keyboardType='numbers-and-punctuation'
          style={styles.input}
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          onChangeText={(text) => this.setState({ enddate: text })}
          value={this.state.enddate}
        />

        <TouchableOpacity style={styles.buttonContainer}
          onPress={this._onPressAdd}>
          <Text style={styles.buttonText}>
            Log Task
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}
          onPress={this._backToList}>
          <Text style={styles.buttonText}>
            Task List
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    backgroundColor: 'grey',
    marginBottom: 10,
    color: 'white',
    padding: 10,
    borderRadius: 15
  },
  buttonContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#57606f',
    borderRadius: 15,
    height: 50
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: 30
  }

});
