import React, { Component } from 'react';
import { Dimensions, Alert, StyleSheet, Text, TouchableOpacity, Pressable, View, TextInput, SafeAreaView } from 'react-native';
import estilos from '../../estilos';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';
import FontAwesome from '@expo/vector-icons/FontAwesome';
const width = Dimensions.get('screen').width;
import Rotas from '../../../../RotasManut';
import { Input } from 'reactstrap';
//import ComboboxCriticidade from '../Modals/comboboxCriticidade'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

let itemOrigem;
let descricaoEditada;
Modal.setAppElement('#root');
const App = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    // Hook que demonstra se a modal está aberta ou não


    // Função que abre a modal
    function abrirModal() {
        setIsOpen(true);
    }

    // Função que fecha a modal
    function fecharModal() {
        setIsOpen(false);
    }

    // Código JSX necessário para criar uma modal simples que abre e fecha
    return (
        <>

         {/* <TouchableOpacity onPress={abrirModal}> <Text>Abrir modal</Text></TouchableOpacity> */}

            <FontAwesome.Button style={estilos.botaoItemEditar} onPress={abrirModal} name="edit"></FontAwesome.Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                contentLabel="Modal de exemplo"
            >
                <Text>Olá</Text>
                   <FontAwesome.Button style={estilos.botaoItemEditar} onPress={abrirModal} name="edit"></FontAwesome.Button>
                <Text>Eu sou uma modal</Text>
            </Modal>
        </>
    );
}


export default App;


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


const props = {};
