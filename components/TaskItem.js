import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TaskItem = props => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
			<View style={styles.listItem}>
				<Text>{ props.title }</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({

	listItem : {
		padding: 10,
		borderColor: "black",
		backgroundColor: "#ccc",
		borderWidth: 1,
		marginVertical: 10,
	}
});


export default TaskItem;