import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import {firebase} from '@react-native-firebase/database';
import {FlatList, StyleSheet, View,Text,StatusBar} from 'react-native';

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

const PackageStatus = () => {

  // useEffect(()=>{
  //   console.log(DATA);  
  // },[])  
  
  return (
    
    <View style={styles.container}>
        <FlatList
        data = {DATA} 
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default PackageStatus;
