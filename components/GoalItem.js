import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.outputTextGoal}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outputTextGoal: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "pink",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
