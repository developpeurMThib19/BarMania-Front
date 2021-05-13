import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Connexion from './app/components/connexion';
import Inscription from './app/components/inscription';
import Links from './app/components/links';
import motdePasseOublier from './app/components/motdePasseOublier';
import linking from "./linking";

import HomeScreen from "./app/components/HomeScreen";
import LinkingButtonScreen from "./app/components/LinkingButtonScreen";
import NotificationsScreen from "./app/components/NotificationsScreen";

const Stack = createStackNavigator();


function MyStack(){
  return(
    <Stack.Navigator>
     
      <Stack.Screen name="Mot de passe oublier" component={motdePasseOublier} />

     
    </Stack.Navigator>
  );
}


export default function App() {
    return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
});

