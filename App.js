import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {

	const [tasks, setTasks] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addTaskHandler =  taskTitle => {
		if(taskTitle.length === 0) return;

		setTasks( currentTasks => [
			...currentTasks,
			{ key: Math.random().toString(), value: taskTitle }
		]);
		setIsAddMode(false);
	};

	const removeTaskHandler = taskKey => {
		setTasks( currentTasks =>
		{
			return currentTasks.filter((task) => task.key !== taskKey);
		});
	};

	const cancelAddTaskHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screeen}>
			<Button title="Add New Goal"  onPress={() => setIsAddMode(true)} />
			<TaskInput isVisible={isAddMode} onaddTask={addTaskHandler} onCancel={cancelAddTaskHandler} />
			<FlatList
				data={tasks}
				renderItem={ itemData => <TaskItem id={itemData.item.key} title={itemData.item.value} onDelete={removeTaskHandler} /> }
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screeen :
	{
		padding: 50	
	}
});
