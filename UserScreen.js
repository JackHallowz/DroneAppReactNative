import React ,{useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



const UserScreen = ({navi}) =>
{
    var actualname=[];
    const [username, getUsername] = useState([]);
    const user = auth().currentUser;
    let index = user.email.indexOf("@");
    useEffect(() => {
        actualname = user.email.substring(0,index);
        console.log(actualname)
        getUsername ( actualname);
    },[])
    
    
    
    // getUsername (user.email.substring(0,index))
    const navigation = useNavigation();
        return (
            
        <SafeAreaView style={styles.Title}>
            <View style={styles.Title}>
            <Text>
                UserName: {username } {"\n"} 
                ID: {user.uid} {"\n"}
            </Text> 
            </View>
            <View style={styles.Middle}>
                <Button styles={styles.ButtonStyle} title='Package Status' onPress={()=> navigation.navigate('PackageStatus', {username})}/>
                <Button styles={styles.ButtonStyle} title='Account Setting' />
                <Button styles={styles.ButtonStyle} color='black' title='Log Out' onPress={()=> navigation.goBack() }/>
                <Button style={styles.ButtonStyle} title='Order Package' onPress={()=> navigation.navigate('OrderPackage', {username})}/>
            </View>
            <View style={styles.Bottom}>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create(
    {
        Title:
        {
            flex:1,
            justifyContent:"flex-start",
           
            
        },
        Middle:
        {
            flex:2,
            flexDirection:"row",
            marginTop:250,
            justifyContent:"flex-start"
            
        },
        ButtonStyle:
        {
            borderWidth:2,
            flexDirection:"column",
            alignSelf:'center'
        },
        Bottom:
        {
            marginTop:50,
            flex:3,
        },

    }
)


export default UserScreen;