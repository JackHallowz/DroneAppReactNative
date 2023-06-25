import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import {firebase} from '@react-native-firebase/database';
import {FlatList, StyleSheet, View,Text,StatusBar,SectionList,VirtualizedList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const reference = firebase.app().database('https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app').ref('/Lists').on('value',snapshot=> {console.log('user data:', snapshot.val())});

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item', 
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const data =
[
  {"books": {"ID": "gadafa3213", "Position": "HCM"}}
];
const DATA_1 = [
  
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
const PackageStatus = () => {

  // useEffect(()=>{
  //   console.log(DATA);  
  // },[])  
  
  return (
    
    <SafeAreaView style={styles.container}>
        
        <Text style={{color:'black',justifyContent:'center'}}>
          
          {data.pop()}
        </Text>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});
export default PackageStatus;
