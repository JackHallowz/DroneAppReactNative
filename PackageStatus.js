import React, { useEffect,useState, }  from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database, {firebase} from '@react-native-firebase/database';
import {FlatList, StyleSheet, View,Text,StatusBar,SectionList,VirtualizedList,Pressable,onPress,Modal, Alert, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const ref = 'https://new-world-22236-default-rtdb.asia-southeast1.firebasedatabase.app';
import GlobalStyles from './GlobalStyles';
import background from './assets/packagestatus_background.jpg'
  






const PackageStatus = ({navigate,route}) => {
  const work = route.params;
  const newz = Object.values(work);
  const newzz = '/User/'+newz
  const navigation = useNavigation();

  const [modalOpen, setModalOpen] = useState(false);
  const [datanow, setdatanow] = useState([]);
  const [keys, setkeys] = useState([]);
  const [value,setvalue] = useState([]);
  const [Confirm, setConfirm] = useState('');

  function removal (name)
  {
    
    const newzzz = newzz + `/${name}/`
    console.log(newzzz)
    Alert.alert('Removal Warning','Do you really want to remove this product?',[
      {
        text: "Confirm",
        onPress: ()=> {database().ref(newzzz).remove(); alert("Removed")}
        
      },
      {
        text: "Cancel",
        onPress: ()=> console.log("Cancelled")
        
      },
      
    ],
    {
      cancelable:true,
    })
    
  }
  useEffect(() => {
 
    
      const reference = firebase.app().database(ref).ref(`${newzz}`).on('value', snapshot =>{ const data = snapshot.val(); if(data!=null) {const newposts = Object.entries(data);console.log(data);setdatanow(newposts); setkeys(Object.keys(data)); setvalue(Object.values(data))}});
    return  () => firebase.app().database(ref).ref(`${newzz}`).off('value',reference);
  },[])

   function presshandler (name,username )
  {
     
     navigation.navigate('Item details', {name, username})
  }
  
  return ( 
    <ImageBackground source={background} resizeMode="cover" style={GlobalStyles.BackImageStyle }>
      <SafeAreaView style={GlobalStyles.TitleStyle}>
      <FlatList
      data={keys}
      renderItem={( {item}) => (
        <TouchableOpacity  onPress={() =>   presshandler(item,newz)} onLongPress={()=> removal(item) }>
            <Text style={styles.keys}>{item}</Text>
        </TouchableOpacity>
      )}/>   
      <Text style={GlobalStyles.Text}>
        Hold to delete packages
      </Text>
        </SafeAreaView>
      </ImageBackground>  
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
    justifyContent:'center'
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
