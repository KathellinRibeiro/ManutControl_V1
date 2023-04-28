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

let itemOrigem;
let descricaoEditada;
let metricInicialEditada;
let metricFinallEditada;


function excluirItem(item) {
    fetch(Rotas.routesSensor + 'delete/' + item._id, {
        method: 'DELETE',
    });
    // window.location.reload(true);
};

function editarItem(item) {


    fetch(Rotas.routesSensor + 'update/' + item._id, {
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
    fetch(Rotas.routesSensor + 'update/' + itemOrigem._id, {
        method: 'PUT',
        body: JSON.stringify({
            "name": descricaoEditada,
            "metric_Inicial":metricInicialEditada,
            "metric_Final":metricFinallEditada

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
        itemOrigem = this.props.item;
        const { modalVisible } = this.state;

        console.log(itemOrigem._id);
        descricaoEditada = itemOrigem.name;
        metricFinallEditada = itemOrigem.metric_Final;
        metricInicialEditada = itemOrigem.metric_Inicial;

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
                            <Text style={styles.textCardStyle}>Editar Sensor</Text>
                            <View style={styles.cardStyle} >
                            </View>

                            <SafeAreaView style={styles.viewComponentes}>
                                <View style={styles.viewModalGeral}>
                                    <Text style={styles.text}>{itemOrigem._id}</Text>
                                    <TextInput style={styles.textInputStyle} id={itemOrigem._id}
                                        onChangeText={(text) => descricaoEditada = text}
                                        onChange={(text) => descricaoEditada = text}
                                        defaultValue={descricaoEditada}
                                    />
                                    <TextInput style={styles.textInputStyle} id={itemOrigem._id}
                                        onChangeText={(text) => metricInicialEditada = text}
                                        onChange={(text) => metricInicialEditada = text}
                                        defaultValue={metricInicialEditada}
                                    />
                                    <TextInput style={styles.textInputStyle} id={itemOrigem._id}
                                        onChangeText={(text) => metricFinallEditada = text}
                                        onChange={(text) => metricFinallEditada = text}
                                        defaultValue={metricFinallEditada}
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
                                    onPress={() => this.setState({ modalVisible: !modalVisible })}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>
                <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => this.setState({ modalVisible: true })} name="edit"
                // onPress={}
                ></FontAwesome.Button>

                {/*       <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => editar()} name="edit"
                // onPress={}
                ></FontAwesome.Button> */}
                <FontAwesome.Button style={estilos.botaoItemExcluir} onPress={() => excluirItem(itemOrigem)} name="remove"
                // onPress={}
                ></FontAwesome.Button>
                {/*        <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setState({ modalVisible: true })}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                    
                </Pressable> */}
            </View>
        );
    }
}

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