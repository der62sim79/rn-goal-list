import React, {useState} from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';



const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

      

    return(
        <View style={styles.userInputRow}>
        <TextInput
          style={styles.userInput}
          placeholder="Ziele 2021..."
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    );
}

const styles = StyleSheet.create({
    userInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        width: "80%",
      },
      userInputRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
})

export default GoalInput;