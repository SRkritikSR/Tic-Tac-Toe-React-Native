import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
// import FlexBox from './Mycomponents/FlexBox';
// import GameBoard from './Mycomponents/GameBoard';
import GameBoardLoop from './Mycomponents/GameBoardLoop';
export default function App() {
  return (
    //  <FlexBox/>
     <GameBoardLoop/>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Enter Something below..</Text>
    //   <TextInput style={styles.TextInput} 
    //     multiline
    //     onChangeText={(newtext)=> {
    //       ChangeName(newtext)
    //   }}
    //     placeholder="Enter you name here"/>
    //   <Text> {Name}</Text>
    // </View>
  );
}
// filter basically acts like a channi to tea, it filters according to the cndition we give

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    border: "1px solid red",
    margin: "10px",
    padding: "20px",
    width: "50%"
  },
  text: {
    fontWeight: "bold",
  }
});
