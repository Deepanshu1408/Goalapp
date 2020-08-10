import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete}>
      <Text style={styles.outputText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outputText: {
    padding: 10,
    margin: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
    backgroundColor: '#ccc',
  },
});

export default GoalItem;
