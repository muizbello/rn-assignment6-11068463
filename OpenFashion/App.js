import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaFrameContext, SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Pages/HomeScreen';
import CartScreen from './Pages/CartScreen';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
        <SafeAreaProvider >
         <NavigationContainer >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name= 'Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='CartScreen' component={CartScreen}  options={{ headerShown: false }} />
          </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
     
  },
});
