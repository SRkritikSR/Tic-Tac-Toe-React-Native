import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
//we will built a box with three rows and these three rows would have  a flex direction of 
//column, they would be arranged like column and these each row would be made as a row

const GameBoard = () => {
  const RowAR = [];
  const gameAR=[];
  for (let i=0;i<3;i++){
  for (let j = 0; j < 3; j++) {
    RowAR.push(<TouchableOpacity style={styles.cell}>
        <Text style={styles.heading}>
        </Text>
      </TouchableOpacity>)
  }
  console.log(gameAR)
  return(gameAR[i].push(<View style={styles.row}>{RowAR}</View>))

}
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text
          style={styles.heading}>TIC sfdfsTAC TOE</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.gameboard}>
          {gameAR}
        </View>

      </View>
    </View>

  )
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
    backgroundColor: "#888",
  },
  navbar: {
    marginTop: "1%",
    display: "flex",
    flex: 1 / 16,
    backgroundColor: "grey",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    borderWidth: 5,



  },
  heading: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    height: "100%",
    width: "50%",
    color: "white",
    backgroundColor: "black",
  },
  body: {
    flex: 1,
    backgroundColor: "pink",
    margin: "2%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  gameboard: {
    display: "flex",
    flexDirection: "row",
    width: "50vmax",
    height: "50vmin",
    backgroundColor: "yellow",
  },
  cell: {
    flex: 1 / 3,
    alignItems: "center",
    backgroundColor: "yellow"
  }
  // box1: {
  //   alignSelf: "flex-start",
  //   width: "30%",
  //   flex: 1 / 3,
  //   backgroundColor: "red"
  // },

  // box2: {
  //   width: "30%",
  //   height: "30%",
  //   flex: 1 / 3,
  //   backgroundColor: "violet"
  // },

  // box3: {
  //   alignSelf: "flex-end",
  //   width: "30%",
  //   flex: 1 / 3,
  //   backgroundColor: "green"
  // },
  // box4: {
  //   alignSelf: "flex-start",
  //   flex: 1 / 3,
  //   backgroundColor: "green"
  // },
  // box5: {
  //   alignSelf: "center",
  //   flex: 1 / 3,
  //   backgroundColor: "green"
  // },
  // box6: {
  //   alignSelf: "flex-end",
  //   flex: 1 / 3,
  //   backgroundColor: "green"
  // },
  // box7: {
  //   alignSelf: "flex-start",
  //   flex: 1 / 3,
  //   backgroundColor: "green"
  // },
  // box8: {
  //   alignSelf: "center",
  //   flex: 1 / 3,
  //   backgroundColor: "green",

  // },
  // box9: {
  //   alignSelf: "flex-end",
  //   flex: 1 / 3,
  //   backgroundColor: "green"
  // },

})