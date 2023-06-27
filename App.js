import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SignUp from './SignUp';
import UserScreen from './UserScreen';
import PackageStatus from './PackageStatus';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Itemdetails from './ItemDetails'
const Stack = createStackNavigator();
import GettingData from './GettingData';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PackageStatus">
        <Stack.Screen name= "Home" component= {HomeScreen} />
        <Stack.Screen name= "Sign Up" component={SignUp} />
        <Stack.Screen name= "UserScreen" component={UserScreen}/>
        <Stack.Screen name= "PackageStatus" component={PackageStatus}/>
        <Stack.Screen name= "Itemdetails" component={Itemdetails}/>
        <Stack.Screen name= "GettingData" component={GettingData}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App ;

  


