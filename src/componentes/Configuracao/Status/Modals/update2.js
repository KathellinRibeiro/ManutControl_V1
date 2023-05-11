import React, { Component, useState, useEffect } from 'react';
import { Dimensions, Alert, Modal, StyleSheet, TouchableOpacity, Text, Pressable, View, TextInput, SafeAreaView } from 'react-native';
import estilos from '../../estilos';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const width = Dimensions.get('screen').width;
import Rotas from '../../../../RotasManut';
//import ComboboxCriticidade from '../Modals/comboboxCriticidade'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

let itemOrigem;
let descricaoEditada;


function excluirItem(item) {
    fetch(Rotas.routesStatus + 'delete/' + item._id, {
        method: 'DELETE',
    });
    // window.location.reload(true);
};

function editarItem(item) {
    fetch(Rotas.routesStatus + 'update/' + item._id, {
        method: 'PUT',
        body: JSON.stringify({
            "Descricao": "Baixa",
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json)));
};


function editar() {
    fetch(Rotas.routesStatus + 'update/' + itemOrigem._id, {
        method: 'PUT',
        body: JSON.stringify({
            "Descricao": descricaoEditada,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json)));        
};



const App = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    itemOrigem = item;
    descricaoEditada = itemOrigem.Nome;
    return (
        <View style={[styles.centeredView]}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(false);
                }}>


                <View >
                    <View style={[styles.modalView]}>
                        <Text style={styles.textCardStyle}>Editar Setor</Text>
                        <View style={styles.cardStyle} >
                        </View>

                        <SafeAreaView style={styles.viewComponentes}>
                            <View style={styles.viewModalGeral}>
                                <Text style={styles.text}>{itemOrigem._id}</Text>
                                <TextInput style={styles.textInputStyle}
                                    enablesReturnKeyAutomatically={false}
                                    onChangeText={(text) => descricaoEditada = text}
                                    onChange={(text) => descricaoEditada = text}
                                    defaultValue={descricaoEditada}
                                    autoFocus={false}
                                    onRequestClose={() => {
                                        this.setState({ modalVisible: false });
                                    }}
                                />
                            </View>
                        </SafeAreaView>
                        <View style={styles.viewButton}>
                            <Pressable
                                style={[styles.button, styles.buttonSave]}
                                onPress={() => editar()}>
                                <Text style={styles.textStyle}>Salvar</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => [setModalVisible(false)]}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>

            <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => [ setModalVisible(true)]} name="edit"
            ></FontAwesome.Button>
            <FontAwesome.Button style={estilos.botaoItemExcluir} onPress={() => excluirItem(itemOrigem)} name="remove"
            ></FontAwesome.Button>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        marginTop: 22,
        flexDirection: 'row-reverse',
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