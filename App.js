
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home"
import Login from "./pages/Login"
import criarConta from "./pages/criarConta"
import recuperarSenha from './pages/recuperarSenha';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Login' component={Login}></Stack.Screen>
        <Stack.Screen name ='Home' component={Home}></Stack.Screen>
        <Stack.Screen name ='criarConta' component={criarConta}></Stack.Screen>
        <Stack.Screen name ='recuperarSenha' component={recuperarSenha}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

