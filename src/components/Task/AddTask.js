import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import TaskForm from './TaskForm'

export default class AddTask extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          {/* <Image style={styles.logo} source={require('../../images/new.png')} /> */}
          <Text style={styles.title}>Add New Task</Text>
        </View>
        <View style={styles.formContainer}>
          <TaskForm />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#2f3542'
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 2,
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100
    },
    title: {
      color: 'white',
      marginTop: 10,
      width: 100,
      textAlign: 'center',
      opacity: 0.9,
      fontSize:20
    },
    formContainer: {
      paddingBottom:30
    }
  }
);