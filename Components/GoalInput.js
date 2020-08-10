import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandle = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.GoalCont}>
        <TextInput
          style={styles.input}
          placeholder="Enter Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.ButtonStyle}>
          <View style={styles.Buttons}>
            <Button title="cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.Buttons}>
            <Button title="Add" onPress={addGoalHandle} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 16,
    width: '80%',
  },

  GoalCont: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingEnd: 10,
  },
  ButtonStyle: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Buttons: {
    width: '40%',
  },
});

export default GoalInput;
