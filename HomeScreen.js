import { View, Text , SafeAreaView, Image, StyleSheet, Button, ImageBackground} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) =>
{
    const [Username, setUsername] = useState('Enter');
    const [Passowrd, setPassword] = useState('Enter');
    const [hidePass, setHidePass] = useState(true);

    return(
        
        <ImageBackground  source={{uri:'https://c4.wallpaperflare.com/wallpaper/536/671/770/genshin-impact-paimon-genshin-impact-video-game-characters-video-game-art-video-game-girls-hd-wallpaper-preview.jpg'}} resizeMode="cover" style={{width:'100%',height:'100%',justifyContent:"center"}} >
             
            {/* <Image source={Logo} style={styles.Logo} />    */}
            
            <View>
                <Text style={styles.TextUserName}> UserName </Text>
                <TextInput style={styles.inputContainer} placeholder= "Enter" onChangeText={(val)=>setUsername(val)}  > </TextInput>
                <Text style={styles.TextUserName}> Password </Text>
                <TextInput style={styles.inputContainer} onChangeText={(val)=>setPassword(val)}  secureTextEntry={true} placeholder="Password" password={true}> </TextInput>
            </View>
            <View style={{marginVertical:10}}>
                <Button style={styles.Button} title="Log In"  />  
            </View>
            <View style={{marginVertical:10}}>
                <Button style={styles.Button} title=" Sign Up" onPress={()=> navigation.navigate('Sign Up')} /> 
            </View>

                    

        </ImageBackground>

       
    );
};

export default HomeScreen;

const styles = StyleSheet.create(
    {
        inputContainer:
        {
            
            maxHeight:10,
            borderWidth: 2,
            borderColor: '#777',
            padding: 10,
            margin: 4,
            maxWidth:'100%',
            
            outlineColor: "black",
            placeholderTextColor: "#9a73ef",
            maxHeight: '30%',
            borderColor: 'white',
            color:'white',
            
        },
        Logo:
        {          
            flex: 1,
            maxHeight: 200,
            maxWidth: 200,
            alignSelf:'center'
        },
        TextUserName:
        {
            flex: 1,
            color: 'black',
            marginLeft: 10,
            fontWeight: 'bold',
            alignItems:'center',
            color:'white'
        },
        Container:
        {
            flex: 1,
            alignItems:'center',
            backgroundColor: '#F5FCFF',
            
        },
        Button:
        {
            flex:1,
            padding: 15,
            borderRadius: 5,
        },
        Title:
        {
            justifyContent:'center',
            alignSelf: 'center',
            
        },
        Spacing:
        {
            height: 20,
            
        }
    }
)