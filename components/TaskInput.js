import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const TaskInput = props => {

	const [enteredTask, setEnteredTask] = useState("");

	const taskInputHandler =  (enteredText) => {
		setEnteredTask(enteredText);
	};
	
	return (
		<Modal>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter Task Name"
					style={styles.TextInput}
					onChangeText={taskInputHandler}
					value={enteredTask}
				/>
				<Button title="Add" onPress={props.onaddTask.bind(this, enteredTask)}></Button>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({

	inputContainer :
	{
		flexDirection: "row",
		alignItems: "center"
	},
	TextInput :
	{
		flex: 1,
		marginRight: 10,
		borderColor: '#ced4da',
		borderRadius: 4,
		borderWidth: 1,
		padding: 10
	},

});

export default TaskInput;