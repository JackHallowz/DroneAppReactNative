import React, {useState,SetStateAction} from 'react';
import {View, Text, Image, StyleSheet, Button, Easing, Alert,TouchableWithoutFeedback,Keyboard,ImageBackground, Pressable} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import database, { firebase } from '@react-native-firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalStyles from './GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function SignUp () 
{   
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Phone, setPhone] = useState('');
    const actualname = Email.substring(0,Email.indexOf("@"));
    const [rightIcon, setrightIcon] = useState('eye');
    const [hidePass, sethidePass] = useState(true);
    function  signinchange  ()
    {
        if(Email == '' || Password == '')
        {
            Alert.alert('Warning',"Username or Passing can't be empty string",[{text: 'understood',onPress:() => TextInputclear()}], );
            
        }
        else if(Password.length>10)
        {
            Alert.alert('Warning',"Password can't be longer than 10 characters",[{text: 'understood',onPress:() => TextInputclear() }, ]);
            
        }
        else
        {
            auth().createUserWithEmailAndPassword(Email,Password)
            .then(()=>{database().ref('/User/').update({ [actualname] : '' });Alert.alert('Nortification','The user: '+ `${Email}` + ' been created',[
                {
                    text:'OK!',
                    onPress:()=> {TextInputclear();}
                }
            ])})
            .catch(error => {
                if(error.code == 'auth/email-already-in-use'){
                    Alert.alert('ERROR!','that email is already used! Please change your UserName',[
                        {
                            text:'Understood',
                            onPress:()=> {TextInputclear();}
                        }
                    ]);
                }
                if(error.code == 'auth/invalid-email'){
                    Alert.alert('ERROR!','Email Adress is invalid',[
                        {
                            Text:'Understood',
                            onPress:()=> {setEmail('')}
                        }
                    ]);
                }
                if(error.code == 'auth/weak-password'){
                    Alert.alert('ERROR!','Password must have at least 6 characters',[
                        {
                            text:'Understood',
                            onPress:()=>{setPassword('')}
                        }
                    ])
                }
                
            }
            )            

        }

    
        
    };
    const handlePasswordVisibility = () => {
        if(rightIcon === 'eye')
        {
            setrightIcon('eye-off');
            sethidePass(!hidePass);
        }
        else if (rightIcon === 'eye-off')
        {
            setrightIcon('eye');
            sethidePass(!hidePass);
        }
    }; 
    function TextInputclear()
    {
        setEmail('');
        setPassword('');
    };
    return(
        <TouchableWithoutFeedback  onPress={()=> {Keyboard.dismiss()}}>
            <ImageBackground source={{uri:'https://pbs.twimg.com/media/FmwDVysXoAA4oYA?format=jpg&name=4096x4096'}} resizeMode="cover" style={GlobalStyles.BackImageStyle }>        
                <View >
                    <Text style={GlobalStyles.Text}> Email* </Text>
                    <TextInput   style={GlobalStyles.InputStyle} placeholder='e.g User@test.com' placeholderTextColor='black'  value={Email} onChangeText={(value)=>setEmail(value)}  />
                    <Text style={GlobalStyles.Text}> Password* </Text>
                    <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <TextInput style={GlobalStyles.InputStyle}  placeholder='less than 10 characters' secureTextEntry={hidePass} value={Password}  onChangeText={(value)=>setPassword(value)}/>
                        <Pressable  onPress={handlePasswordVisibility}>
                            <MaterialCommunityIcons name={rightIcon} size={20} color={"white"}/>
                        </Pressable>
                    </View>
                    <SafeAreaView style={GlobalStyles.ViewButton}>
                        <Button style={GlobalStyles.ButtonStyle} title="Create New Account" onPress={()=>signinchange()}/>
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
            borderColor: 'black',
            padding: 10,
            maxWidth:'90%',
            width: 300,
            alignSelf: 'center',
            color:'black',
            flexDirection:'row'
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