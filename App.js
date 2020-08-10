import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };

  const cancleAddGoalAditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  return (
    <SafeAreaView>
      <View>
        <View style={{padding: 50}}>
          <Button title="Add goals" onPress={() => setIsAddMode(true)} />
        </View>

        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancleAddGoalAditionHandler}
        />
        <View>
          <FlatList
            data={courseGoals}
            renderItem={itemData => (
              <GoalItem
                onDelete={removeGoalHandler.bind(this, itemData.item.id)}
                title={itemData.item.value}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
