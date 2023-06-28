import React, { useState } from 'react'
import {View, Text, Image, StyleSheet, Button,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import uuid from 'react-uuid';
import database from '@react-native-firebase/database';

export default function OrderPackage() {
    const [Type, setType] = useState('');
    const [ID, setID] =  useState('');
    const [exPosition, setexPosition] =  useState('');
    const [dePosition, setdePosition] =  useState('');
    const uniqueID = uuid();
 return(
    <TouchableWithoutFeedback onPress={()=> { Keyboard.dismiss()}}> 
        <SafeAreaView style={styles.Title}>
            <Text style={styles.Text}> Item Name </Text>
            <TextInput style={styles.Textinput} placeholder='e.g VinLand Saga Manga,etc...' ></TextInput>
            <Text style={styles.Text}> Extract Position </Text>
            <TextInput style={styles.Textinput} placeholder='e.g HCMCity, Hanai,etc...' ></TextInput>
            <Text style={styles.Text}> Deposite Position </Text>
            <TextInput style={styles.Textinput} placeholder='e.g HCMCity, Hanai,etc...' ></TextInput>
            <Text style={styles.Text}> {uniqueID} </Text>
        </SafeAreaView>
    </TouchableWithoutFeedback>
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

