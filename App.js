import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {

	const [tasks, setTasks] = useState([]);

	const addTaskHandler =  taskTitle => {
		setTasks( currentTasks => [...currentTasks, { key: Math.random().toString(), value: taskTitle }] );
	};

	const removeTaskHandler = taskId => {
		setTasks( currentTasks =>
		{
			return currentTasks.filter((task) => task.id !== taskId);
		});
	};

	return (
		<View style={styles.screeen}>
			<TaskInput onaddTask={addTaskHandler} />
			<FlatList
				data={tasks}
				renderItem={ itemData => <TaskItem id={itemData.item.id} title={itemData.item.value} onDelete={removeTaskHandler} /> }
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screeen :
	{
		padding: 50	
	},


});
