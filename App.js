import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Button } from 'react-navigation';
import Splash from './Splash';
import Tasks from './src/components/Task/Tasks';
import AddTask from './src/components/Task/AddTask';

export default class App extends React.Component {
  render() {
    return (
      <AddTask />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(
  'AwesomeProject',
  () => App);
