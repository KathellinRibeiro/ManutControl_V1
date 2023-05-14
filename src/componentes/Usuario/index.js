
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

import styles from './styles';
import { List, Checkbox } from 'react-native-paper';


let email;
let senha;

export default function Login() {
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

                    <TouchableOpacity style={styles.buttonRegister} >
                        <Text style={styles.registerText}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </>
    );
}