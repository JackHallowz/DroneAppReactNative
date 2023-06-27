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

  






const PackageStatus = ({navigate,route}) => {

  

  
    const work = route.params;
    const newz = Object.values(work)
    
    console.log(newz)
    
  const navigation = useNavigation();
  
  
  const [datanow, setdatanow] = useState([])
  const [keys, setkeys] = useState([])
  const [value,setvalue] = useState([])

  useEffect(() => {
    const reference = firebase.app().database(ref).ref(`${newz}`).on('value', snapshot =>{ const data = snapshot.val(); const newposts = Object.entries(data);setdatanow(newposts); setkeys(Object.keys(data)); setvalue(Object.values(data))})
    
  },[])
  
  
 
   function presshandler (name,username )
  {
     
     navigation.navigate('Itemdetails', {name, username})
  }
  
  return (
    
    
    <SafeAreaView style={styles.container} >
      
    <FlatList
    data={keys}
    renderItem={( {item}) => (
      <TouchableOpacity  onPress={() =>   presshandler(item,newz)}>
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
