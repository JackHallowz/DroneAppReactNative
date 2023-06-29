import React, { useEffect, useState } from 'react'
import {View, Text, Image, StyleSheet, Button,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import uuid from 'react-uuid';
import database, { firebase } from '@react-native-firebase/database';
import GlobalStyles from './GlobalStyles';
import react from 'react';
const ref = 'https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app';

 
export default function OrderPackage({route,navigation}) {
    function UploadOnpress (title,extract,deposite) 
    {
        const username = Object.values(route.params)
        const unsername = "/User/"+username
       const uniqueID = uuid();
       database().ref(`${unsername}`).update(  { [title]: {ID: `: ${uniqueID}`, extractPosition: `: ${extract}`, depositePosition: `: ${deposite}`}}).then(TextInputclear())
    }


    function TextInputclear()
    {
        setType('');
        setdePosition('');
        setexPosition('')
    }
    
    const [Type, setType] = useState('');
    const [ID, setID] =  useState('');
    const [exPosition, setexPosition] =  useState('');  
    const [dePosition, setdePosition] =  useState('');
    
 return(
    <TouchableWithoutFeedback onPress={()=> { Keyboard.dismiss()}}> 
        <SafeAreaView style={GlobalStyles.TitleStyle}>
            <Text style={GlobalStyles.Text}> Item Name </Text>
            <TextInput  style={GlobalStyles.InputStyle} placeholder='e.g VinLand Saga Manga,etc...' value={Type} onChangeText={(value)=> setType(value)}></TextInput>
            <Text style={GlobalStyles.Text}> Extract Position </Text>
            <TextInput style={GlobalStyles.InputStyle} placeholder='e.g HCMCity, Hanai,etc...' value={exPosition} onChangeText={(value)=> setexPosition(value)} ></TextInput>
            <Text style={GlobalStyles.Text}> Deposite Position </Text>
            <TextInput style={GlobalStyles.InputStyle} placeholder='e.g HCMCity, Hanai,etc...'  value={dePosition} onChangeText={(value)=> setdePosition(value)} ></TextInput>
            <Button style={GlobalStyles.ButtonStyle} title='Create' onPress={() => UploadOnpress(Type,exPosition,dePosition)}/>
        </SafeAreaView>
    </TouchableWithoutFeedback>
 )
}


