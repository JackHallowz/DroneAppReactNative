import React, {useState,SetStateAction} from 'react';
import {View, Text, Image, StyleSheet, Button, Easing, Alert,TouchableWithoutFeedback,Keyboard,ImageBackground} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import database, { firebase } from '@react-native-firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from './GlobalStyles';
function SignUp () 
{   
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');
    const actualname = Email.substring(0,Email.indexOf("@"));

    function  signinchange  ()
    {
        if(Email == '' || Password == '')
        {
            Alert.alert('Warning',"Username or Passing can't be empty string",[{text: 'understood',onPress:() => ('alert closed')}]);
            TextInputclear();
        }
        else if(Password.length>10)
        {
            Alert.alert('Warning',"Password can't be longer than 10 characters",[{text: 'understood',onPress:() => ('alert closed') } ]);
            TextInputclear();
        }
        else
        {
            auth().createUserWithEmailAndPassword(Email,Password)
            .then(()=>{console.log("User " + {Email} + " has been created");
            database().ref('/User/').update({ [actualname] : '' });})
            .catch(error => {
                if(error.code == 'auth/email-already-in-use'){
                    console.log('that email is already used! Please change your UserName');
                }
                if(error.code == 'auth/invalid-email'){
                    console.log('Email Adress is invalid');
                }
                console.error(error);
            }
            )            

        }

    
        
    }
    function TextInputclear()
    {
        setEmail('');
        setPassword('');
    }
    return(
        <TouchableWithoutFeedback  onPress={()=> {Keyboard.dismiss()}}>
            <ImageBackground source={{uri:'https://pbs.twimg.com/media/FmwDVysXoAA4oYA?format=jpg&name=4096x4096'}} resizeMode="cover" style={GlobalStyles.BackImageStyle }>        
                <View style={styles.Screen }>
                    <Text style={styles.TextUserName}> Email* </Text>
                    <TextInput   style={styles.inputContainer} placeholder='Required'  value={Email} onChangeText={(value)=>setEmail(value)}  >
                    </TextInput>
                    <Text style={styles.TextUserName}> Password* </Text>
                    <TextInput style={styles.inputContainer} placeholder='less than 10 characters' secureTextEntry value={Password} onChangeText={(value)=>setPassword(value)}  >
                    </TextInput>
                    <SafeAreaView style={{marginVertical:15,borderRadius: 8, maxWidth: 200, alignSelf:'center'}}>
                    <Button title="Create New Account" onPress={()=>signinchange() }/>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
        
}

const styles = StyleSheet.create(
    {
        inputContainer:
        {
            borderWidth:3,
            maxHeight:50,
            borderWidth: 3,
            borderColor: 'black',
            padding: 10,
            margin: 1,
            maxWidth:'100%',
            width: 300,
            alignSelf: 'center',
            color:'black',
            
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