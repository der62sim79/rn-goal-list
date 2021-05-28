import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [yearGoals, setYearGoals] = useState([]);
  const [isAddMod, setIsAddMod] = useState(false);

  const addGoalHandler = (goalTitle) => {
    // bei dieser schreibweise wird von rn garantiert eine vollständige liste zurück zu bekommen
    // dem flatlist werden so objekte übergeben key lösung nicht perfekt aber reicht für die übung
    setYearGoals((currentGoals) => [
      ...yearGoals,
      { id: Math.random().toString(), val: goalTitle },
    ]);
    setIsAddMod(false);
  };

  const removeGoalHandler = (goalId) => {
    setYearGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAddHandler = () => {
    setIsAddMod(false);
    
  };

  return (
    <View style={styles.container}>
      <Button title="Ziel Hinzufügen" onPress={() => setIsAddMod(true)} />
      <GoalInput
        visible={isAddMod}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={yearGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.val}
            onDelete={removeGoalHandler}
            id={itemData.item.id}
          />
        )}
      />

      <View></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
