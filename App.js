import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
function buttonhandler(){
  alert("Hi")
}
  return (
    <View style={styles.container}>
      <Text >Hello World!</Text>
      <Button title = "Press Me" onPress = {buttonhandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize : 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
