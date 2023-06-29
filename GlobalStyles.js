import React from 'react'
import {View, Text, Image, StyleSheet, Button,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';

 const GlobalStyles = StyleSheet.create(
{
    ButtonStyle:
    {
        padding: 10,
        borderRadius: 5,
        margin:5,
    },
    InputStyle:
    {
        margin:3,
        borderColor:'black',
        borderWidth: 3,
        marginLeft:1,
        width: 300,
        color:'black',
        padding:10,
        paddingRight:3,
        
    },
    TitleStyle:
    {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    Text:
    {
        color: 'black',
        fontWeight: 'bold',
        color:'black',
        fontSize:15,
    },
    BackImageStyle:
    {
        width:'100%',
        height:'100%',
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
}) 
 
    
  

export default GlobalStyles;