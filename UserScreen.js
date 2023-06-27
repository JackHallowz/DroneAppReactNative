import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';



const UserScreen = ({navi}) =>
{
    
    const user = auth().currentUser;
    const navigation = useNavigation();
        return (
            
        <SafeAreaView style={styles.Title}>
            <View style={styles.Title}>
            <Text>
                UserName: {user.email } {"\n"} 
                ID: {user.uid} {"\n"}
            </Text> 
            </View>
            <View style={styles.Middle}>
                <Button styles={styles.ButtonStyle} title='Order Status' onPress={()=>navigation.navigate('PackageStatus')}/>
                <Button styles={styles.ButtonStyle} title='Account Setting' />
                <Button styles={styles.ButtonStyle} color='black' title='Log Out' onPress={()=> auth().signOut}/>
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
            justifyContent:"space-around"
            
        },
        ButtonStyle:
        {
            borderWidth:2,


        },
        Bottom:
        {
            marginTop:50,
            flex:3,
        },

    }
)


export default UserScreen;