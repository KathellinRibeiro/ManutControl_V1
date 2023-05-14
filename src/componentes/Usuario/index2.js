
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cores } from '../../estilos';

import CriarConta from './criarConta'
import {
    KeyboardAvoidingView,
    Image,
    TextInput,
    Animated,
    Keyboard,
    SafeAreaView,
    Text,
    ScrollView,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    StatusBar
} from 'react-native';

let email;
let senha;
import styles from './styles';
import { List, Checkbox } from 'react-native-paper';


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


const Stack = createNativeStackNavigator();

const MyStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
  {(props) => <App {...props}  />}
</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer> 

 /*      <NavigationContainer>
             <Stack.Navigator >
                 <Stack.Screen
                 
                     name="Login"
                     component={App()}
                 />
                 <Stack.Screen name="CriarConta" component={CriarContaScreen} />
             </Stack.Navigator>
             </NavigationContainer>  */
    ); 
};

const App = ({props}) => {
   
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));



    useEffect(() => {
        keyboardDidShowListener
            = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

        keyboardDidHideListeer
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
                        //keyboardType="visible-password"
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

                    <TouchableOpacity style={styles.buttonRegister} onPress={() =>
                        navigate('CriarConta')}>
                        <Text style={styles.registerText}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </>
    );
}

class MyComponent extends React.Component {


    render() {
        const { navigate } = this.props.navigation;
        const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
        const [opacity] = useState(new Animated.Value(0));
        const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));



        useEffect(() => {
            keyboardDidShowListener
                = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

            keyboardDidHideListener
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
            <SafeAreaView style={style.container}>
                <ScrollView>
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
                                    //keyboardType="visible-password"
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

                                <TouchableOpacity style={styles.buttonRegister} onPress={() =>
                                    navigate('CriarConta')}>
                                    <Text style={styles.registerText}>Criar conta gratuita</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </KeyboardAvoidingView>
                    </>
                </ScrollView>
            </SafeAreaView>
        );
    }

}




const CriarContaScreen = ({ navigation, route }) => {

    return <CriarConta></CriarConta>;
};

const style = StyleSheet.create({
    TextGrafico: {
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: cores.azulClaro,
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        borderRadius: 20,
    },
    filter: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#0066CC',
    },
    botaoItem: {
        height: 40,
        borderColor: '#0066CC',
    },

    title: {
        fontSize: 32,
    },

});



export default MyStack;

