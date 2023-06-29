import { View, Text , SafeAreaView, Image, StyleSheet, Button, ImageBackground,TouchableWithoutFeedback,Keyboard} from "react-native";
import React, { useEffect, useState,useCallback}   from "react";
import { TextInput } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';
import UserScreen from "./UserScreen";
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from "./GlobalStyles";
import { firebase } from "@react-native-firebase/database";
import { G } from "react-native-svg";

const HomeScreen = ({}) =>
{
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [User, setUser] = useState();
    const [initializing, setInitializing] = useState(true);
    const navigation = useNavigation();
    function clearinput ()
    {
        setUsername('');
       
    }
    
    
    function onAuthStateChanged(User) {
        setUser(User);
        if(initializing) setInitializing(false);
     
        
    }

    useEffect(()=>{
        const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
        
        return subcriber;
    },[])
    if(initializing) return null;   
    const loginchange = () => 
    {
        auth().signInWithEmailAndPassword(Username,Password)
        .then( userCredentials => {
            const user = userCredentials.user;
            console.log('Logged under',user.email)
            navigation.navigate("UserScreen");
        }) 
        .catch(error => alert(error))
    }
    return(
        <TouchableWithoutFeedback  onPress={() => {Keyboard.dismiss() }} >
            <ImageBackground source={{uri:'https://w0.peakpx.com/wallpaper/1007/301/HD-wallpaper-final-fantasy-xvi-claive-ff16-ffxvi-square-enix.jpg'}} resizeMode="cover" style={GlobalStyles.BackImageStyle }  >   
            <View >
                <Text style={GlobalStyles.Text}  > Email </Text>
                <TextInput style={GlobalStyles.InputStyle }   onChangeText={(val)=> setUsername(val)}> </TextInput>
                <Text style={GlobalStyles.Text}> Password </Text>
                <TextInput style={GlobalStyles.InputStyle}  onChangeText={(val)=> setPassword(val)} > </TextInput>
            <View style={{marginVertical:10}}>
                <Button style={GlobalStyles.ButtonStyle} title="Log In"  onPress={loginchange}/>  
            </View>
            <View style={{marginVertical:10}}>
                <Button style={GlobalStyles.ButtonStyle} title="Sign Up" onPress={()=> navigation.navigate('Sign Up')} /> 
            </View>
            <View style={{marginVertical:10}}>
                <Button style={GlobalStyles.ButtonStyle} title="Clear" onPress={clearinput} />
            </View>
            </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
       
    );
};



export default HomeScreen;

