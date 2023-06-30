import { View, Text , SafeAreaView, Image, StyleSheet, Button, ImageBackground,TouchableWithoutFeedback,Keyboard} from "react-native";
import React, { useEffect, useState,useCallback}   from "react";
import { TextInput } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';
import UserScreen from "./UserScreen";
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from "./GlobalStyles";
import { firebase } from "@react-native-firebase/database";
import CheckBox from "@react-native-community/checkbox";
import background from "./assets/Clive_FF16_Wallpaper.jpg"
const HomeScreen = ({}) =>
{
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(false);
    const [User, setUser] = useState();
    const [initializing, setInitializing] = useState(true);
    const navigation = useNavigation();
    function clearinput ()
    {
        setUsername('');
        setPassword('');
    }
    
    
    function onAuthStateChanged(User) {
        setUser(User);
        if(initializing) setInitializing(false);
     
        
    }

    useEffect(()=>{
        const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
        clearinput();
        return subcriber;
    },[])
    if(initializing) return null;   
    const loginchange = () => 
    {
        auth().signInWithEmailAndPassword(Username,Password)
        .then( userCredentials => {
            const user = userCredentials.user;
            console.log('Logged under',user.email)
            navigation.navigate("User Screen");
        }) 
        .catch(error => alert(error,clearinput()))
    }
    return(
        <TouchableWithoutFeedback  onPress={() => {Keyboard.dismiss() }} >
            <ImageBackground source={background} resizeMode="cover" style={GlobalStyles.BackImageStyle }  >   
            <View >
                <Text style={GlobalStyles.Text}  > Email </Text>
                <TextInput style={GlobalStyles.InputStyle } value={Username}  onChangeText={(val)=> setUsername(val)}> 
                </TextInput>
                <Text style={GlobalStyles.Text}> Password </Text>
                <TextInput style={GlobalStyles.InputStyle}  value={Password} secureTextEntry={!hidePass} onChangeText={(val)=> setPassword(val) }  >
                </TextInput>
            </View>
            <View style={GlobalStyles.CheckBoxViewStyle}>
                <CheckBox disabled={false} value={hidePass} testID="Show Password" onValueChange={(newvalue) => setHidePass(newvalue) }/>
                <Text style={{fontSize:15,margin:6}}> Show Password   </Text>
            </View>
            <View style={GlobalStyles.ViewButton}>
                <Button style={GlobalStyles.ButtonStyle} title="Log In"  onPress={loginchange}/>  
            </View>
            <View style={GlobalStyles.ViewButton}>
                <Button style={GlobalStyles.ButtonStyle} title="Sign Up" onPress={()=> navigation.navigate('Sign Up')} /> 
            </View>
            <View style={GlobalStyles.ViewButton}>
                <Button style={GlobalStyles.ButtonStyle} title="Clear" onPress={clearinput} />
            </View>
            
            </ImageBackground>
        </TouchableWithoutFeedback>
       
    );
};



export default HomeScreen;

