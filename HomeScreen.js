import { View, Text , SafeAreaView, Image, StyleSheet, Button, ImageBackground} from "react-native";
import React, { useEffect, useState,useCallback}   from "react";
import { TextInput } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';



const HomeScreen = ({navigation}) =>
{
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const [User, setUser] = useState();
    const [initializing, setInitializing] = useState(true);

    const clearinput = useCallback(()=> {setUsername('')},[] );
    

    function onAuthStateChanged(User) {
        setUser(User);
        if(initializing) setInitializing(false);
    }

    useEffect(()=>{
        const subcriber = auth().onAuthStateChanged(onAuthStateChanged);
        clearinput;
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
        
        <ImageBackground source={{uri:'https://c4.wallpaperflare.com/wallpaper/536/671/770/genshin-impact-paimon-genshin-impact-video-game-characters-video-game-art-video-game-girls-hd-wallpaper-preview.jpg'}} resizeMode="cover" style={{width:'100%',height:'100%', justifyContent:'center'} }  >
            
            <View style={styles.container}>
                <Text style={styles.TextUserName}  > Email </Text>
                <TextInput style={styles.inputContainer} Username={Username} onChangeText={setUsername }> </TextInput>
                <Text style={styles.TextUserName}> Password </Text>
                <TextInput style={styles.inputContainer} Password ={Password} onChangeText={setPassword}  > </TextInput>
            
            <View style={{marginVertical:10}}>
                <Button style={styles.Button} title="Log In"  onPress={loginchange}/>  
            </View>
            <View style={{marginVertical:10}}>
                <Button style={styles.Button} title="Sign Up" onPress={()=> navigation.navigate('Sign Up')} /> 
            </View>
            <Button style={styles.Button} title="Clear" onPress={clearinput} />
            </View>
                    

        </ImageBackground>

       
    );
};


export default HomeScreen;

const styles = StyleSheet.create(
    {
        inputContainer:
        {   
            margin:3,
            borderColor:'white',
            borderWidth: 3,
            marginLeft:1,
            width: 300,
            color:'white',
            padding:10,
            paddingRight:3,
            
        },
        container:
        {
            alignSelf:"center",
        },
        TextUserName:
        {
            color: 'black',
            fontWeight: 'bold',
            color:'white',
            fontSize:15,
            
        },
        Button:
        {
            
            padding: 10,
            borderRadius: 5,
        },
        Title:
        {
            flex:2,
            flexDirection:'column',
            
            
        },
        Spacing:
        {
            height: 20,
            
        }
    }
)