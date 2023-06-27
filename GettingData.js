import React, { useState } from 'react'
import {firebase} from '@react-native-firebase/database';
import { View } from 'react-native';


export default function GettingData ()  {
  var [data,setdata] = useState()
  firebase.app().database('https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app').ref('/Lists' ).child('Books').on('value',snapshot =>{ setdata = snapshot.val()});
  
  return data;
  
  
  // if(data != null)
  // return data
    
     //return (data = null ? null : data)
}
 