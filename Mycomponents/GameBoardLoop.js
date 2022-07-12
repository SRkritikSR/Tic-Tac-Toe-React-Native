import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

//we will built a box with three rows and these three rows would have  a flex direction of 
//column, they would be arranged like column and these each row would be made as a row
const GameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const X_Symbol = "X";
const O_Symbol = "O";
const GameGenrate = (mapData, callback) => {
  const GameAR = [];
  for (let i = 0; i < mapData.length; i++) {
    const RowAR = [];
    const rowlength = mapData[i].length;
    for (let j = 0; j < 3; j++) {
      RowAR.push(<TouchableOpacity key={`RowAR_${i}_${j}`} onPress={() => { callback(i, j) }} style={styles.cell}>
        <Text style={[styles.celltext]}>
          {GameMatrix[i][j]}
        </Text>
      </TouchableOpacity>)
    }
    GameAR.push(<View key={`GameAr_${i}`} style={styles.row}>{RowAR}</View>)
  }
  return (GameAR)
}
// const CheckWinner=(tempMatrix)=> {
//   //console.log(tempMatrix)
//   tempMatrix.every((element) => element===tempMatrix[0]
//   );
// }

// SetWinner sets the matrix for further comparision and send the
//collected matrix to the CheckSetWinner
const SetWinner = (Row_Matrix) => {

  //console.log(stage, 'Set Winner')
  let Col_Matrix = [[], [], []];
  let Dig_Matrix = [[], []]

  for (let i = 0; i < Row_Matrix.length; i++) {
    let Row_Length = Row_Matrix[i].length;
    for (let j = 0; j < Row_Length; j++) {
      Col_Matrix[j][i] = Row_Matrix[i][j]
      if ((i == j)) {
        Dig_Matrix[0][j] = Row_Matrix[i][j]
        if (i == (Row_Length - 2)) {
          Dig_Matrix[1][i] = Row_Matrix[i][j];
        }

      }
      else if ((i + j) == (Row_Length - 1)) {
        // here the 11 or the middle element wouldn't be present as it comes under i==j 


        Dig_Matrix[1][i] = Row_Matrix[i][j];
      }
    }

  }
  const allLines = Row_Matrix.concat(Col_Matrix).concat(Dig_Matrix);
  //console.log(allLines)


  //The check set winner tests wheather any winner is there or not,(isequal) 
  //or wheather theree is no winner but a tie match(isnotNull)


  //console.log(stage, 'Set Check Winner')
  // console.log(allLines)
  let IsNotNull = [];
  for (let i = 0; i < allLines.length; i++) {
    const lines = allLines[i]
    const isequal = lines.every((element) => element === lines[0])
    IsNotNull.push(lines.every((element) => element !== null))
    if (isequal) {
      // In this only those will come whose all elements are similar to 
      //the first ones, therefore this would contain all the null coloumn, rows 
      //and diaongals which are empty, plus the rows where there is a possiblity
      //of winner, i.e all elements are same to the first one 
      //xxx/ooo/nullnullnull
      //console.log("In Isequal")
      if (lines[0] !== null) {
        //console.log("First symbol is not null")
        return lines[0]
      }
    }
  }
  CheckNull(IsNotNull)
  return false

}
let CheckNullVar = false;
const CheckNull = (CheckAr) => {

  //console.log(stage,'CheckNull')
  CheckNullVar = CheckAr.every((element) => element === true)
}
//template litreals are way of writing string with place holder ex My name is {name}


const GameBoardLoop = () => {
  const [gameStage, setgameStage] = useState(GameMatrix)
  const [gameSymbol, setgameSymbol] = useState(X_Symbol)
  const [WhoseTurn, setWhoseTurn] = useState(`Player ${gameSymbol} turn`)
  const [subheadingColor, setsubheadingColor] = useState("#1F51FF")
  const OnTouchCell = () => {

    //console.log(stage, 'OnTouchCell')
    const tempturn = gameSymbol == X_Symbol ? O_Symbol : X_Symbol // If current symbol is X change it O, otherwise let it be same
    setgameSymbol(tempturn);
    setWhoseTurn(`Player ${tempturn} turn`)
    setgameStage(GameMatrix)
    //console.log("JustBeforeIf")
    if (SetWinner(gameStage)) {
      setsubheadingColor("red")
      setWhoseTurn(`Player ${SetWinner(gameStage)} WINS!!!`)
      return true
    }
    else return false
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text
          style={styles.heading}>TIC TAC TOE
        </Text>
        <Text style={[styles.subheading, { color: subheadingColor }]}>
          {WhoseTurn}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.gameboard}>
          {GameGenrate(gameStage, (i, j) => {
            let res = OnTouchCell()
            // We have made this constant res because if we donot we have to 
            //unnecessary call the OnTouchCell funciotn again and again
            if (res) {
              return
            }
            else {
              let res = OnTouchCell()
              if (!res && CheckNullVar) {
                setWhoseTurn("Match Tied")
                return
              }
              if (gameStage[i][j] === null) {
                gameStage[i][j] = gameSymbol;
              }
              else {
                return
              }
            }
          })}
        </View>
      </View>
    </View>

  )
}
export default GameBoardLoop
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#888",
  },
  navbar: {
    marginTop: 25,
    display: "flex",
    flex: 1 / 4,
    backgroundColor: "grey",
    justifyContent: "center",
    alignContent: "center",

  },
  heading: {
    display: "flex",
    textAlignVertical: "center",
    textAlign: "center",
    marginTop: 5,
    fontSize: 35,
    flex: 5,
    margin: 15,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  subheading: {
    display: "flex",
    margin: 15,
    padding: 7.5,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 25,
    flex: 3,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    display: "flex",
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  gameboard: {
    display: "flex",
    width: 300,
    height: 300,
    justifyContent: "center",
  },
  cell: {
    display: "flex",
    width: 100,
    height: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1F51FF",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  celltext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
})
