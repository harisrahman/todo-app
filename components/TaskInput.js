import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const TaskInput = props => {

	const [enteredTask, setEnteredTask] = useState("");

	const taskInputHandler =  (enteredText) => {
		setEnteredTask(enteredText);
	};

	const addTaskHandler =  () => {
		props.onaddTask(enteredTask);
		setEnteredTask("");
	};
	
	return (
		<Modal visible={props.isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter Task Name"
					style={styles.TextInput}
					onChangeText={taskInputHandler}
					value={enteredTask}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={props.onCancel} />
					</View>
					<View style={styles.button}>
						<Button title="ADD" onPress={addTaskHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({

	inputContainer :
	{
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	TextInput :
	{
		width: "80%",
		marginBottom: 10,
		borderColor: '#ced4da',
		borderRadius: 4,
		borderWidth: 1,
		padding: 10
	},
	buttonContainer :
	{
		width: "60%",
		flexDirection: "row",
		justifyContent: "center"
	},
	button :
	{
		width: "50%",
		marginRight: 10,
	}
});

export default TaskInput;