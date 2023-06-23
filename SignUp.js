import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button,} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function SignUp () 
{   
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');

    return(
        <View style={styles.Screen }>
            <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/002/405/021/original/baby-cats-icon-illustration-vector.jpg'}} resizeMode= 'contain' style={styles.Logo}/>
            <Text style={styles.TextUserName}> Full Name </Text>
            <TextInput style={styles.inputContainer } placeholder='Required' onChangeText={(val)=>setName(val)}></TextInput>
            <Text style={styles.TextUserName}> Phone Number </Text>
            <TextInput style={styles.inputContainer } placeholder='Optional'>
                <AntDesign name="phone" size={18} color="black" />
            </TextInput>
            <Text style={styles.TextUserName}> Email* </Text>
            <TextInput style={styles.inputContainer} placeholder='Required'>
                <MaterialIcons name="email" size={18} color="black" />
            </TextInput>
            <Text style={styles.TextUserName}> Password* </Text>
            <TextInput style={styles.inputContainer} placeholder='less than 20 words' password={true}></TextInput>
            <View style={{marginVertical:15,borderRadius: 8, maxWidth: 200, alignSelf:'center'}}>
                <Button title="Create New Account" />
            </View>
        </View>
    );
        
}

const styles = StyleSheet.create(
    {
        inputContainer:
        {
           
            maxHeight:50,
            borderWidth: 1,
            borderColor: '#777',
            padding: 15,
            margin: 1,
            maxWidth:'100%',
            width: 300,
            alignSelf: 'center',
            
        },
        TextUserName:
        {
            
            color: 'black',
            marginLeft: 40,

        },
        Screen:
        {   
            flex:1,
            
            justifyContent:"center"
        },
        Logo:
        {          
            maxHeight: 200,
            maxWidth: 200,
            alignSelf:'center',
            
        },
        Button:
        {
            
            padding: 15,
            
            
        },
    }
);

export default SignUp;