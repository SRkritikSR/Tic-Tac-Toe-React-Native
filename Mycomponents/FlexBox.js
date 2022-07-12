import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box1</Text>
      <Text style={styles.box2}>Box2</Text>
      {/* <Text style={styles.box3}>Box3</Text>
      <Text style={styles.box4}>Box4</Text> */}
      
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
  container: {
    margin: 50,
    display: "flex",
    flex: 1/2,  
    flexDirection: "row",
    backgroundColor: "grey",
    flexWrap: "wrap",
 
    // justifyContent: "center",
    // alignContent: "center",
    
  },
  box1: {
    backgroundColor: "yellow",
    justifyContent: "center",
    width: "50%",
  },
  box2: {
    backgroundColor: "violet",
    padding: 5,
    width: "25%"
  },
  box3: {
    backgroundColor: "pink",
    padding: 10,
    width: "50%"
  },
  box4: {
    
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignContent: "center",
  },
})