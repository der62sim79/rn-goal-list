import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.outputTextGoal}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  outputTextGoal: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "pink",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
  },
});

export default GoalItem;
