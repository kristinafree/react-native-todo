import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'

export const Todo = ({ todo, onRemove }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }
    
    return(
        <TouchableOpacity>
            <View style={styles.todo} >
                <Text>{todo.title}</Text>
                <TouchableHighlight onPress={longPressHandler}>
                    <Text style={styles.btn}>REMOVE</Text>
                </TouchableHighlight>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#03032F',
        borderStyle: 'dashed',
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 30
    },
    btn: {
        backgroundColor: '#03032F',
        color: '#FFF',
        width: 70,
        height: 30,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        fontSize: 13
    }
})
