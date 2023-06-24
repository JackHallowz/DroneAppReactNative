import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
function UserScreen  ()
{
    const user = auth().currentUser;
   
        return (
        <SafeAreaView style={styles.Title}>
            <View style={styles.Title}>
            <Text>
                UserName: {user.email } {"\n"} 
                ID: {user.uid} {"\n"}
            </Text>
            </View>
            <View style={styles.Middle}>
                <Button styles={styles.ButtonStyle} title='Order Status'/>

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
            backgroundColor:'black',
            marginTop:150,
        },
        ButtonStyle:
        {
            borderWidth:2,


        },
        Bottom:
        {
            flex:3,
        },

    }
)


export default UserScreen;