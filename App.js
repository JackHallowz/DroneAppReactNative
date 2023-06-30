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
import OrderPackage from './OrderPackage'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name= "Home" component= {HomeScreen} />
        <Stack.Screen name= "Sign Up" component={SignUp} />
        <Stack.Screen name= "User Screen" component={UserScreen}/>
        <Stack.Screen name= "Package Status" component={PackageStatus}/>
        <Stack.Screen name= "Item details" component={Itemdetails}/>
        <Stack.Screen name= "Order Package" component={OrderPackage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App ;

  


