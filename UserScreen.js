import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
function UserScreen  ()
{
    return (
        <SafeAreaView>
            <Text>
                UserName:
                ID:
            </Text>
        </SafeAreaView>
    )
};

export default UserScreen;