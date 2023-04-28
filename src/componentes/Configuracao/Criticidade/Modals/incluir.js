import React, { Component } from 'react';
import { Dimensions, Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView } from 'react-native';
import estilos from '../../estilos';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const width = Dimensions.get('screen').width;
import Rotas from '../../../../RotasManut';
//import ComboboxCriticidade from '../Modals/comboboxCriticidade'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

let descricaoEditada;
function incluir() {
    fetch(Rotas.routesCriticidade + 'post', {
        method: 'POST',
        body: JSON.stringify({
            "Nome": descricaoEditada,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json)));
};

class App extends Component {
    state = {
        modalVisible: false,
    };
    render() {
        const { modalVisible } = this.state;

        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        this.setState({ modalVisible: !modalVisible });
                    }}>
                    <View >
                        <View style={styles.modalView}>
                            <Text style={styles.textCardStyle}>Incluir Criticidade</Text>
                            <View style={styles.cardStyle} >
                            </View>
                            <SafeAreaView style={styles.viewComponentes}>
                                <View style={styles.viewModalGeral}>
                                <Text>Descição Criticidade</Text>
                                    <TextInput style={styles.textInputStyle}
                                        onChangeText={(text) => descricaoEditada = text}
                                        onChange={(text) => descricaoEditada = text}
                                        defaultValue={descricaoEditada}
                                    />
                                </View>
                            </SafeAreaView>
                            <View style={styles.viewButton}>
                                <Pressable
                                    style={[styles.button, styles.buttonSave]}
                                    onPress={() => incluir()}>
                                    <Text style={styles.textStyle}>Salvar</Text>
                                </Pressable>

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setState({ modalVisible: !modalVisible })}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>
                <FontAwesome.Button style={estilos.botaoItemIncluir} onPress={() => this.setState({ modalVisible: true })} name="plus"
                // onPress={}
                ></FontAwesome.Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
    },

    viewButton: {
        flexDirection: 'row',
    },
    viewComponentes: {
    },
    viewModalGeral: {
        marginTop: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 5,
        marginTop: 100,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#f00'
    },
    buttonSave: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    textInputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        padding: 8,
        marginTop: 5,
        opacity: 0.7
    },
    text: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 20,
        padding: 12,
        marginTop: 5,
        opacity: 0.7
    },

    comboboxStyle: {
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#0066CC',
    },

    cardStyle: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
        opacity: 0.7
    },
    textCardStyle: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '12%',

    },
});

export default App;