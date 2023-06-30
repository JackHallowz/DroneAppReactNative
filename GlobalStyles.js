import React from 'react'
import {View, Text, Image, StyleSheet, Button,SafeAreaView,TouchableWithoutFeedback,Keyboard} from 'react-native';

 const GlobalStyles = StyleSheet.create(
{
    ButtonStyle:
    {
        padding: 10,
        borderRadius: 8,
        margin:5,
        
    },
    InputStyle:
    {
        margin:3,
        borderColor:'black',
        borderWidth: 3,
        width: 300,
        color:'black',
        padding:10,
        fontSize:15,
        
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
        alignItems:'center',
    },
    ViewButton:
    {
        marginVertical:10,
        width:300,
    },
    CheckBoxViewStyle:
    {   
        alignSelf:'flex-start',
        flexDirection:'row',
        
    },
    TouchableStyle: 
    {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:6,
    },
    ViewMiddleStyle:
    {
        flex:2,
        alignItems:'flex-end',
        justifyContent:'space-evenly',
        marginVertical:200,
        
    }
}) 
 
    
  

export default GlobalStyles;