import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [yearGoals, setYearGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // bei dieser schreibweise wird von rn garantiert eine vollständige liste zurück zu bekommen
    setYearGoals((currentGoals) => [...yearGoals, enteredGoal]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInputRow}>
        <TextInput
          style={styles.userInput}
          placeholder="Ziele 2021..."
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {yearGoals.map((goal) => (
          <View style={styles.outputTextGoal} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
      <View></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
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
  outputTextGoal: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "pink",
    borderWidth: 1,
    marginVertical: 10,
  },
});
