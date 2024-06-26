import React, { useEffect,useState,useCallback, } from 'react'
import { useNavigation } from '@react-navigation/native';
import {TextInput,SafeAreaView,StyleSheet,Text,View,FlatList,SectionList, ImageBackground } from 'react-native';
import {firebase, } from '@react-native-firebase/database';
import background from './assets/ItemDetail_Background.jpg'
import GettingData from './GettingData';
import GlobalStyles from './GlobalStyles';
var ref = 'https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app';

var done;
var onchangeval;
var receive;

const ItemDetails = ({route,navigation}) => {
  var name = route.params
  const zz = Object.values(name) 
  const [datanow, setdatanow] = useState([])
  const [keys, setkeys] = useState([])
  const [value,setvalue] = useState([])
  useEffect(() => {
    const reference = firebase.app().database(ref).ref( "/User/"+zz[1] ).child(`${zz[0]}`).on('value', snapshot =>{ const data = snapshot.val(); const newposts = Object.entries(data);setdatanow(newposts); setkeys(Object.keys(data)); setvalue(Object.values(data))})
    
    return () => firebase.app().database(ref).ref("/User/"+zz[1] ).child(`${zz[0]}`).off('value',reference);
  },[])

 
  
  
  
 
  return ( 
    <ImageBackground source={background} style={GlobalStyles.BackImageStyle}>
      <SafeAreaView style={styles.container}> 
          <FlatList
          data={datanow}
          renderItem={({item}) =>(
            <Text style={styles.keys}> {item}</Text>
          )}/>
      </SafeAreaView>
    </ImageBackground>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  keys: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});


export default ItemDetails;
