import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

const img = {uri: 'https://possets.com/wp-content/uploads/2016/05/products-night-sky-stars.jpg'}

export const Navbar = ({title}) => {
    return(
        <ImageBackground source={img} style={styles.img}>
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View> 
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    text: {
        color: '#FFF',
        fontSize: 20
    },
    img: {
        resizeMode: "cover"
    }
})