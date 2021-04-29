import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [yearGoals, setYearGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    // bei dieser schreibweise wird von rn garantiert eine vollständige liste zurück zu bekommen
    // dem flatlist werden so objekte übergeben key lösung nicht perfekt aber reicht für die übung
    setYearGoals((currentGoals) => [
      ...yearGoals,
      { key: Math.random().toString(), val: goalTitle },
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={yearGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.val} />}
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
