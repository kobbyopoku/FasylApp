import React, { Component } from 'react'
import { Text, View, ScrollView, Button, TouchableOpacity, StyleSheet, FlatList, AppRegistry} from 'react-native'
import { createStackNavigator } from 'react-navigation';
import AddTask from '../Task/AddTask'
import firebase from 'firebase'
import { Button } from 'native-base';


export default class componentName extends Component {
  componentWillMount = () => {
    var appConfig = {
      apiKey: "AIzaSyA1hNwI2jPNamm8IKOzwOXarDh9SEJuOKE",
      authDomain: "fasyl-app.firebaseapp.com",
      databaseURL: "https://fasyl-app.firebaseio.com",
      projectId: "fasyl-app",
      storageBucket: "fasyl-app.appspot.com",
      messagingSenderId: "1099219513580",
      persistence: true
    }


    var rootRef = firebase.database().ref();
    var taskRef = rootRef.child('tasks');

    taskRef.on('value', (childSnapshot) => {
      const tasks = [];
      childSnapshot.forEach((doc) => {
        tasks.push({
          key: doc.key,
          taskName: doc.toJSON().taskName
        });
        this.setState({
          tasks: tasks,
          loading: false
        })
      });
    })
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
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text>Task List</Text>
        </View>
        <ScrollView>
          <FlatList>
            data= {this.state.taskName}
            renderItem={({ item, index }) => {
              return (
                <Text>{item.taskName}</Text>
              )
            }}
          </FlatList>
        </ScrollView>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Tasks')} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              New Task
          </Text>
          </TouchableOpacity>
          <Button title='Add New Task' style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('AddTask')}/>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);

const AppStackNavigator = createStackNavigator({
  AddTask : AddTask,
})

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
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
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20,
    textAlign: 'center',
    justifyContent: 'center'
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
    padding: 5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: 20,
    margin: 10
  }
});