import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Text, ImageBackground,TouchableHighlight } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
      if (value.trim()) {
        onSubmit(value)
        setValue('')
      } else {
          Alert.alert('To do list name cannot be empty')
      }
    }

    const img = {uri: 'https://possets.com/wp-content/uploads/2016/05/products-night-sky-stars.jpg'}

    return(
        <View style={styles.block}>
            <TextInput
                style={styles.input} 
                onChangeText={setValue}
                value={value}
                placeholder='New todo...'
                autoCorrect={true}
                autoCapitalize='none'
                autoFocus={true}
                // keyboardType='number-pad'
            />
            <ImageBackground  source={img} style={styles.img}>
                <TouchableHighlight onPress={pressHandler} style={styles.btn}>
                    <Text style={styles.text}>ADD</Text>  
                </TouchableHighlight>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        color: '#FFD700'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#03032F'
    },
    btn: {
        alignItems: 'center',
        width: 85,
        height: 45,
        borderWidth: 1,
        borderBottomStartRadius: 20,
        padding: 13,
        shadowColor: '#FFF',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3
    },
    text: {
        color: '#FFF',
    },
    img: {
    resizeMode: "cover",
    overflow: 'hidden',
    borderRadius: 20
    }
})