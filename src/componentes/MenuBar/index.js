import * as React from 'react';
import { Text, View,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  estilos  from './estilos';
import { cores } from '../../estilos';
import icon from '../../../assets/icon.png'

function HomeScreen() {
  return (
    <View style={estilos.HomeScreen}>
      <Text>ManutControl</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={estilos.SettingsScreen}>
      <Text>TESTE</Text>
    </View>
  );
}

const tabOption={
  activeTintColor: cores.claro,
  inactiveTintColor: cores.claro,
  activeBackgroundColor: cores.azulClaro,
  inactiveBackgroundColor: cores.azulPrincipal,
  style: {
    height: 70,
  },
  labelStyle: {
    width: '100%',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 15,
    marginTop: 1,
    paddingTop: 15,
    backgroundColor: cores.azulPrincipal 
  },
  keyboardHidesTabBar: true,

};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: cores.azulPrincipal,
    text: 'rgb(242, 242, 242)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)'
  },
};
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
  
      <Tab.Navigator  
      
          tabBarOptions={tabOption
      }>
        <Tab.Screen name="Home"component={HomeScreen}/>
        <Tab.Screen name="Monitoramento" component={SettingsScreen}/>
        <Tab.Screen name="Equipamento" component={SettingsScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}