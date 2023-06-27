import React, { useEffect,useState,useCallback, } from 'react'
import { useNavigation } from '@react-navigation/native';
import {TextInput,SafeAreaView,StyleSheet,Text,View,FlatList,SectionList } from 'react-native';
import {firebase} from '@react-native-firebase/database';

import GettingData from './GettingData';
var ref = 'https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app';

var done;
var onchangeval;
var receive;

const ItemDetails = ({route,navigation}) => {
 
  var name = route.params
  //console.log(name)
  
  //console.log(differ) 
  var [datanow, setdatanow] = useState(0)

  useEffect(() => {
    firebase.app().database(ref).ref('/Lists' ).child('Books').once('value', snapshot =>{ console.log(receive = snapshot.val())})
    if (datanow < 2) setdatanow ((datanow) => datanow + 1)
    console.log(receive)
  },[receive,datanow])
    
  
    
  
 
  return ( 
    
    <SafeAreaView style={styles.container}> 

        {/* <FlatList
        data={realdata}
        keyExtractor={ item => item.ID}
        renderItem={({item}) =>(
          <Text style={styles.keys}> {item}</Text>
        )}/> */}
        {/* <SectionList
        sections={realdata}
        renderItem={({items}) => (
          <View>
            <Text>
              {items}
            </Text>
          </View>
        )}
        renderSectionHeader={ ({sections: {ID}}) => (
          <Text>
            {ID}
          </Text>
        )}
        />  */}
    </SafeAreaView>
      
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
