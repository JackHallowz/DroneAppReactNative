import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button,} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
function SignUp () 
{   
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');

    const  signinchange = () =>
    {
        
        auth().createUserWithEmailAndPassword(Email,Password)
        .then(()=>{console.log("User `${Email}` has been created");})
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
    return(
        <View style={styles.Screen }>
            <Image source={{uri:'https://previews.123rf.com/images/uo7/uo72207/uo7220700115/189206049-cute-cartoon-little-baby-cat-icon-cat-sleeping-on-the-floor-cat-with-gray-color-cartoon.jpg'}} resizeMode= 'contain' style={styles.Logo}/>
            {/* <Text style={styles.TextUserName}> Full Name </Text>
            <TextInput style={styles.inputContainer } placeholder='Required' onChangeText={(val)=>setName(val)}></TextInput>
            <Text style={styles.TextUserName}> Phone Number </Text>
            <TextInput style={styles.inputContainer } placeholder='Optional' >
                <AntDesign name="phone" size={18} color="black" />
            </TextInput> */}
            <Text style={styles.TextUserName}> Email* </Text>
            <TextInput style={styles.inputContainer} placeholder='Required' onChangeText={(val)=>setEmail(val)}>
                <Zocial name="email" size={18} color="black"  />
            </TextInput>
            <Text style={styles.TextUserName}> Password* </Text>
            <TextInput style={styles.inputContainer} placeholder='less than 20 words' secureTextEntry  onChangeText={(val)=>setPassword(val)}>
            </TextInput>
            <View style={{marginVertical:15,borderRadius: 8, maxWidth: 200, alignSelf:'center'}}>
                <Button title="Create New Account" onPress={signinchange} />
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
            color:'black'
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