import * as React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { cores } from '../../estilos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import estilos from './estilos';
import HomeScreen from '../HomeScreen';
import Filter from '../HomeScreen/filter'
import Equipamentos from '../Equipamentos'
import Alerta from '../Alertas'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

function Feed() {
  return (
    <View style={estilos.TabScreen}>
      <Text>Profile!</Text>
    </View>
  );
}

function Home() {
  return (
    <>
      <View style={estilos.TabScreen}>
        <HomeScreen/>
      </View>
    </>
  );
}

function Equipamento() {
  return (
    <>
     <View style={estilos.TabScreen}>

<Equipamentos></Equipamentos>
    </View>
    </>   
  );
}



const state = {
  mostrarComponente: false
}

function Profile() {
  return (
    <View style={estilos.TabScreen}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <>
      <View style={estilos.TabScreen }>
     
  <Alerta/>

    </View>
    </>
  
  );
}
function TopBar() {
  return (
    <View style={estilos.TopBar}>
      <Text style={estilos.TextTopBar}>ManutControl</Text>
    </View>
  );
}

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

const Tab = createMaterialBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

function MyTabsBottom() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={cores.azulClaro}
      inactiveColor={cores.azulPrincipal}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Equipamento"
        component={Equipamento}
        options={{
          tabBarLabel: 'Equipamento',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Alerta',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Usuário',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function MyTabsTop() {
  return (
    <TabTop.Navigator
      activeColor={cores.azulClaro}
      inactiveColor={cores.azulPrincipal}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    >

      <TabTop.Screen
        name="Alert"
        component={Alert}
        options={{
          tabBarLabel: 'Alert',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

    </TabTop.Navigator>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/*      <NavigationContainer theme={MyTheme}>
      
      <MyTabsTop />
      
   </NavigationContainer> */}
      <TopBar></TopBar>

      {/* <NavigationContainer theme={MyTheme}>
      <Stack.Navigator >
        <Stack.Screen name="Alert" component={Alert} />
      </Stack.Navigator>

      </NavigationContainer> */}

      <NavigationContainer theme={MyTheme}>


        <MyTabsBottom />

      </NavigationContainer>

    </>

  );
}
