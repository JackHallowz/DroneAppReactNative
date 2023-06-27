import React, { useState } from 'react'
import {View, Text, Image, StyleSheet, Button,SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function OrderPackage() {
    const [Type, setType] = useState('');
    const [ID, setID] =  useState('');
    const [Position, setPosition] =  useState('');
 return(
  <SafeAreaView style={styles.Title}>
    <Text style={styles.Text}> Item Type </Text>
    <TextInput style={styles.Textinput} >
    <Text style={styles.Text}> Item Type </Text>
    </TextInput>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create(
    {
        Title:
        {
            flex:1,
            justifyContent:"center",
            alignItems:"center",
        },
        Textinput:
        {
            margin:3,
            borderColor:'black',
            borderWidth: 3,
            marginLeft:1,
            width: 300,
            color:'white',
            padding:10,
            paddingRight:3,
        },
        Text:
        {
            color: 'black',
            fontWeight: 'bold',
            color:'black',
            fontSize:15,
        },
})

