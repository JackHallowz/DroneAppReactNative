import React ,{useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TouchableHighlight, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from './GlobalStyles';



const UserScreen = ({navi}) =>
{
    var actualname=[];
    const [username, getUsername] = useState([]);
    const user = auth().currentUser;
    let index = user.email.indexOf("@");
    useEffect(() => {
        actualname = user.email.substring(0,index);
        getUsername ( actualname);
    },[])
    // <Button styles={styles.ButtonStyle} title='Package Status' onPress={()=> navigation.navigate('PackageStatus', {username})}/>
    // <Button styles={styles.ButtonStyle} title='Account Setting' />
    // <Button styles={styles.ButtonStyle} title='Log Out' onPress={()=> navigation.goBack() }/>
    // <Button style={styles.ButtonStyle} title='Order Package' onPress={()=> navigation.navigate('OrderPackage', {username})}/>
    
    const [Options, setOptions] = useState([
        {function : 'Package Status', id:'1'},
        {function : 'Account Setting', id:'2'},
        {
            function: 'Log Out',
            id: '3'
        },
        {
            function: 'Order Package',
            id:'4'
        },
    ])
    function shiftRoute(Route)
    {
        console.log(Route)
        navigation.navigate( `${Route}` ,{username})
    }
    // getUsername (user.email.substring(0,index))
    const navigation = useNavigation();
        return (
            <ImageBackground source={{uri:'https://mfiles.alphacoders.com/835/835148.jpg'}} resizeMode="cover" style={GlobalStyles.BackImageStyle }>
           
        <SafeAreaView style={GlobalStyles.TitleStyle}>
            <Text style={GlobalStyles.Text}>
                UserName: {username } {"\n"} 
                ID: {user.uid} {"\n"}
            </Text> 
            <View style={GlobalStyles.ViewMiddleStyle}>
                    <FlatList 
                    numColumns={2} 
                    keyExtractor={(item) => item.id}
                    data={Options}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={()=> shiftRoute(item.function)} >
                            <Text style={GlobalStyles.TouchableStyle} >
                                {item.function}
                            </Text>
                        </TouchableOpacity>
                    )} />
            </View>
        </SafeAreaView>
        </ImageBackground>
    );
};




export default UserScreen;