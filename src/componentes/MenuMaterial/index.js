import React, { useState, useEffect } from 'react';
import { List} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { cores } from '../../estilos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import estilos from './estilos';
import HomeScreen from '../HomeScreen';
import Equipamentos from '../Indicadores'
import Alerta from '../Alertas'
import TestNav from '../Configuracao/Navegation';
import styles from './styles';
import Rotas from '../../RotasManut';
import {
  KeyboardAvoidingView,
  TextInput,
  Animated,
  Keyboard,
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

let email;
let senha;
let name;

function Feed() {
  return (
    <View style={estilos.TabScreen}>
      <Text>Profile!</Text>
    </View>
  );
}

function Login() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));
  useEffect(() => {
    const keyboardDidShowListener
      = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    const keyboardDidHideListeer
      = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }, []);

  function CriarContaUsuario() {
    <CriarConta></CriarConta>
  }

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
        useNativeDriver: true
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100,
        useNativeDriver: true
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerLogo}>
          {/*        <Animated.Image
           style={{
            width: logo.x,
            height: logo.y
          }}
          source={require('../../../assets/icon.png')} 
        /> */}
        </View>

        <Animated.View style={[
          styles.form,
          {
            useNativeDriver: true,
            opacity: opacity,
            transform: [
              {
                translateY: offset.y
              }
            ]
          }
        ]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            onChangeText={(text) => email = text}
            onChange={(text) => email = text}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => senha = text}
            onChange={(text) => senha = text}
          />
          <TouchableOpacity style={styles.buttonSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRegister} >
            <Text style={styles.registerText}>Criar conta gratuita</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
}


function Home() {
  return (
    <>
      <View style={estilos.TabScreen}>
        <HomeScreen />
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
      <TestNav></TestNav>


    </View>
  );
}

function Notifications() {
  return (
    <>
      <View style={estilos.TabScreen}>
        <ScrollView>
          <Alerta />
        </ScrollView>
      </View>
    </>
  );
}
function TopBar() {
  return (
    <View style={estilos.TopBar}>
      <Text style={estilos.TextTopBar}>ManutControl</Text>
      <TouchableOpacity><Text>lOGOUT</Text></TouchableOpacity>
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

    <>
      <Tab.Navigator
        initialRouteName="Home"
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
            tabBarLabel: 'Indicadores',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        {/*         <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarLabel: 'Login',
          }}
        /> */}


        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Alerta',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Configuração',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
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
  const [display, setDisplayTelas] = useState('none');
  const [flTelaCriarConta, setTelaCriarConta] = useState(false);
  const [flCriarConta, setCriarConta] = useState(false);
  const [flAlertLogin, setAlertLogin] = useState(false);
  const [flLogin, setLogin] = useState(false);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 1000, y: 100 }));
  useEffect(() => {
    const keyboardDidShowListener
      = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

    const keyboardDidHideListeer
      = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // Animações em paralelo
    Animated.parallel([
      // Fornece um modelo de física básico (efeito mola/estilingue)
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),

      // Anima um valor ao longo do tempo
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  }, []);


  function Login(email, senha) {
    fetch(Rotas.routesUsuario + 'getLogin/' + email + '/' + senha)
      .then((response) => response.json())
      .then((responseJson) => {
        if (!responseJson) {
          setLogin(false), setCriarConta(false), setDisplayTelas('flex')
        }
        else {
          setLogin(true), setDisplayTelas('none')
        }
      })
      .catch((error) => {
        console.error(error);
        setLogin(false), setCriarConta(false), setDisplayTelas('flex')

      });
  };



  function ExcluirContaUsuario() {
    fetch(Rotas.routesUsuario + 'delete/' + email, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => setLogin(false), setCriarConta(false), setTelaCriarConta(false))
      .then((json) => {
        setLogin(false), setCriarConta(false), setTelaCriarConta(false)
      }
      ).catch((error) => {

      });
  };

  function CriarContaUsuario() {
    fetch(Rotas.routesUsuario + 'post', {
      method: 'POST',
      body: JSON.stringify({
        "Email": email,
        "Nome": name,
        "Senha": senha
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {

        if (!json) {
          setLogin(false), setCriarConta(false), setTelaCriarConta(true), setDisplayTelas('flex')
        }
        else {
          setLogin(false)
            , setCriarConta(true)
            , setTelaCriarConta(false)
            , setDisplayTelas('none')
        }

      }
      ).catch((error) => {

      });
  };

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 95,
        duration: 100,
        useNativeDriver: true
      }),

      Animated.timing(logo.y, {
        toValue: 105,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 170,
        duration: 100,
        useNativeDriver: true
      }),

      Animated.timing(logo.y, {
        toValue: 195,
        duration: 100,
        useNativeDriver: true
      })
    ]).start();
  };
  if (flLogin == false && flTelaCriarConta == false) {
    return (
      <>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.containerLogo}>
            <Animated.Image
              /*        style={{
                      width: logo.x,
                      height: logo.y
                    }} */

              style={{
                opacity: 0.8
              }}
              source={require('../img/Logo5.jpg')}
            />
          </View>

          <Animated.View style={[
            styles.form,
            {
              useNativeDriver: true,
              opacity: opacity,
              transform: [
                {
                  translateY: offset.y
                }
              ]
            }
          ]}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              onChangeText={(text) => email = text}
              onChange={(text) => email = text}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              //keyboardType="visible-password"
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => senha = text}
              onChange={(text) => senha = text}
            />

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => [Login(email, senha)]}>
              <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={() => [setDisplayTelas('none'), setTelaCriarConta(true), setCriarConta(false)]}>
              <Text style={styles.registerText}>Criar conta gratuita</Text>
            </TouchableOpacity>

            <View style={StyleSheet.create([{ display }])}>
              <Text style={[styles.errorText, display]}>Senha ou Usuário Inválido</Text>
            </View>

          </Animated.View>
        </KeyboardAvoidingView>
      </>
    );
  }
  else if (flCriarConta == false && flTelaCriarConta == true) {
    return (
      <>
        <KeyboardAvoidingView style={styles.container}>
          <View style={styles.containerLogo}>
            <Animated.Image
              style={{
                opacity: 0.8
              }}
              source={require('../img/Logo5.jpg')}
            />
          </View>

          <Animated.View style={[
            styles.form,
            {
              useNativeDriver: true,
              opacity: opacity,
              transform: [
                {
                  translateY: offset.y
                }
              ]
            }
          ]}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              onChangeText={(text) => email = text}
              onChange={(text) => email = text}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              keyboardType="default"
              textContentType="name"
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              onChangeText={(text) => name = text}
              onChange={(text) => name = text}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              //keyboardType="visible-password"
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => senha = text}
              onChange={(text) => senha = text}
            />

            {/*      <TouchableOpacity style={styles.buttonSubmit} onPress={() => [setDisplayTelas('none'), setLogin(false), setCriarConta(false), setTelaCriarConta(false)]}>
              <Text style={styles.submitText}>Criar Conta</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.buttonSubmit} onPress={() => [CriarContaUsuario()]}>
              <Text style={styles.submitText}>Criar Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister} onPress={() => [setDisplayTelas('none'), setTelaCriarConta(false)]}>
              <Text style={styles.registerText}>Login</Text>
            </TouchableOpacity>

            <View style={StyleSheet.create([{ display }])}>
              <Text style={[styles.errorText, display]}>Email já cadastrado ou Email inválido</Text>
            </View>
          </Animated.View>
        </KeyboardAvoidingView>
      </>
    );
  }


  else if (flLogin == true) {
    stateUsuario = {
      expanded: false,
    }
    _handlePress = () =>
      this.setState({
        expanded: !stateUsuario.expanded
      });
    return (
      <>
        <Text style={estilos.TextTopBar}>ManutControl</Text>
        <View style={estilos.listUsuario}>
          <List.Accordion
            title={email}
            left={props => <List.Icon {...props} />}
          >
            <List.Item title="Excluir Conta"
              onPress={() => [ExcluirContaUsuario()]}
            />
            <List.Item title="Logout"
              onPress={() => [setLogin(false), setCriarConta(false), setTelaCriarConta(false)]}
            />
          </List.Accordion>
        </View>
        <View style={estilos.TopBar}>
          <View tyle={styles.buttonLogout}>
          </View>
        </View>
        <NavigationContainer theme={MyTheme}>
          <MyTabsBottom />
        </NavigationContainer>
      </>

    );
  }

}
