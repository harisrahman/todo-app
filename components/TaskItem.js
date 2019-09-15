import React from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

const TaskItem = props => {
	return (
		<View style={styles.listItem}>
			<Text>{ props.title }</Text>
		</View>
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