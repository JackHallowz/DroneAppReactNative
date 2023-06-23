import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SignUp from './SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from './UserScreen';

const Stack = createStackNavigator();


 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name= "Home" component= {HomeScreen} />
        <Stack.Screen name= "Sign Up" component={SignUp} />
        {/* <Stack.Screen name= "UserScreen" component={UserScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



