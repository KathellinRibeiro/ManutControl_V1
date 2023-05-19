import React, { useState, useEffect } from 'react';
import estilos from '../estilos';
import estilosConfig from '../estilosConfig'
import axios from 'axios';
import ModalIncluir from '../Criticidade/Modals/incluir'
import Rotas from '../../../RotasManut';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    Pressable,
    Modal,
    TouchableOpacity,
    StatusBar
} from 'react-native';

let itemOrigem;
let descricaoEditada;
let idOrigem;


function excluirItem(item) {
    console.log(item);
    console.log(item._id);
    fetch(Rotas.routesCriticidade + 'delete/' + item._id, {
        method: 'DELETE',
    });
    // window.location.reload(true);
};

function editar() {
    console.log(descricaoEditada);
    console.log(itemOrigem._id)


    fetch(Rotas.routesCriticidade + 'update/' + itemOrigem._id, {
        method: 'patch',
        body: JSON.stringify({
            "Descricao": descricaoEditada,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) =>  carregarLista());
};


const App = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        fetch(Rotas.routesCriticidade + 'getAll')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setMasterData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const carregarLista = () => {
        fetch(Rotas.routesCriticidade + 'getAll')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const modalEditar = (item) => {
        console.log(item)
        itemOrigem = item;
        idOrigem = item._id;
        descricaoEditada = item.Descricao;
        setDisplay('flex');
        console.log(idOrigem)
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter(
                function (item) {
                    if (item.Descricao) {
                        const itemData = item.Descricao.toUpperCase();
                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    }
                });
            setFilteredData(newData);
        }

        else {
            setFilteredData(masterData);
        }
        setSearch(text);
    };

    const ItemView = ({ item }) => {
        return (
            <>
                <View style={estilos.item}>
                    <Text style={estilos.TextGrafico}
                        onPress={() => getItem(item)}>
                        Id:
                        {item._id.toUpperCase()}

                    </Text>
                    <Text style={estilos.TextGrafico}
                        onPress={() => getItem(item)}>
                        Nome:
                        {item.Descricao.toUpperCase()}
                    </Text>

                    <View style={estilos.containerItem}>
                        <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => [modalEditar(item), setDisplay('flex'), setModalVisible(true)]} name="edit"
                        ></FontAwesome.Button>
                        <FontAwesome.Button style={estilos.botaoItemExcluir} onPress={() => [excluirItem(item), carregarLista()]} name="remove"
                        ></FontAwesome.Button>
                    </View>


                </View>


            </>
        );
    };

    const getItem = (item) => {
        alert('Id : ' + item._id + '\n\nTarefa : ' + item.Descricao + '\n\nCompletada: ');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={estilos.botaoView}>
                <FontAwesome.Button style={estilos.botaoItem} onPress={() => [carregarLista()]} name="repeat"
                ></FontAwesome.Button>
            </View>
            <View style={estilos.container}>
                <ModalIncluir></ModalIncluir>
                <TextInput
                    style={estilosConfig.textInputStyle}
                    onChangeText={(text) => searchFilter(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Procure Aqui"
                />
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item._id}
                    renderItem={ItemView}
                />
            </View>
            <View style={[styles.centeredView, { display }]}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(false);
                    }}>
                    <View >
                        <View style={[styles.modalView]}>
                            <Text style={styles.textCardStyle}>Editar Criticidade</Text>
                            <View style={styles.cardStyle} >
                            </View>

                            <SafeAreaView style={styles.viewComponentes}>
                                <View style={styles.viewModalGeral}>
                                    <Text style={styles.text}>{idOrigem}</Text>
                                    <TextInput style={styles.textInputStyle}
                                        onChangeText={(text) => descricaoEditada = text}
                                        onChange={(text) => descricaoEditada = text}
                                        defaultValue={descricaoEditada}
                                        autoFocus={false}
                                        onRequestClose={() => {
                                            setDisplay('none')
                                            this.setState({ modalVisible: false });
                                        }}
                                    />
                                </View>
                            </SafeAreaView>
                            <View style={styles.viewButton}>
                                <Pressable
                                    style={[styles.button, styles.buttonSave]}
                                    onPress={() => [editar(), setModalVisible(false), setDisplay('none'), carregarLista()]}>
                                    <Text style={styles.textStyle}>Salvar</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => [setModalVisible(false), setDisplay('none'), carregarLista()]}>
                                    <Text style={styles.textStyle}>Cancelar</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
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