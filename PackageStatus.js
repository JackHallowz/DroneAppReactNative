import React, { useEffect,useState, }  from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import {FlatList, StyleSheet, View,Text,StatusBar,SectionList,VirtualizedList,Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { TouchableOpacity } from 'react-native';
const ref = 'https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app';
var newworld = 1;
var underworld = 1;

  firebase.app().database(ref).ref('/Lists').on('value',snapshot =>{ newworld =snapshot.val()});






const PackageStatus = (sth) => {

  var dataarray = Object.entries(newworld);
  const datakeys = Object.keys(newworld);
  var datavalues  = Object.values(newworld);
  const navigation = useNavigation();
  
  
 
   function presshandler (name )
  {
     
     navigation.navigate('Itemdetails', name)
  }
  
  return (
    
    
    <SafeAreaView style={styles.container} >
      
    <FlatList
    data={datakeys}
    renderItem={( {item}) => (
      <TouchableOpacity  onPress={() =>   presshandler(item)}>
          <Text style={styles.keys}>{item}</Text>
      </TouchableOpacity>
    )}/>
      {/* <SectionList
      keyExtractor={(item) => item }
      sections={datavalues}
      renderItem={({item}) => (
        <View >
           <Text >
            {item}
           </Text>
        </View>
      )}
      /> */}

     
    
      </SafeAreaView>

  );
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
export default PackageStatus;
