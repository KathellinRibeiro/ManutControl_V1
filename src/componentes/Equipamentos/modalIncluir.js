import React, { Component } from 'react';
import { Dimensions, Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, SafeAreaView } from 'react-native';
import estilos from './estilos';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SelectList } from 'react-native-dropdown-select-list';
const width = Dimensions.get('screen').width;
import Rotas from '../../RotasManut';


let descricaoEquipamento;


let descricaoTag;

let idCriticidade;
let descricaoCriticidade;


let idSensor;
let descricaoSensor;
let metricInicial;
let metricFinal;

let idSetor;
let descricaoSetor;

let idStatus;
let descricaoStatus;

function incluir() {
    //VALIDAR DEPOIS
    fetch(Rotas.routesEquipamento + 'post', {
        method: 'POST',
        body: JSON.stringify({
            "Descricao": descricaoEquipamento,
            "Tag": descricaoTag,
            "Status": [
                {
                    "_id": idStatus,
                    "Descricao": descricaoStatus,
                }
            ],
            "Local": [
                {
                    "_id": idSetor,
                    "Descricao": descricaoSetor,
                }
            ],
            "Criticidade": [{
                "_id": idCriticidade,
                "Descricao": descricaoCriticidade,
            }],

            "Sensor": [{
                "_id": idSensor,    
                "Descricao": descricaoSensor,
                "metric_Inicial": metricInicial,
                "metric_Final":metricFinal,
            }],

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json)));
};



const Criticidade = () => {
    const [selectedCriticidade, setSelectedCriticidade] = React.useState("");
    const [dataCriticidade, setDataCriticidade] = React.useState([]);
    React.useEffect(() => {
        //Get Values from database
        const loadData = async () => {
            axios.get(Rotas.routesCriticidade + 'getAll')
                .then((response) => {
                    // Store Values in Temporary Array
                    let arrayOrigem = { key: 0, value: 'Selecione a Criticidade' }
                    let newArray = response.data.map((item) => {
                        return { key: item._id, value: item.Descricao }
                    });
                    newArray.push(arrayOrigem);
                    newArray.sort((a, b) => (a.key > b.key) ? 1 : -1)
                    //Set Data Variable
                    setDataCriticidade(newArray)
                })
                .catch((e) => {
                    console.log(e)
                })
        };

        loadData();
    }, []);
    console.log(selectedCriticidade.toString());
    return (
        <SelectList setSelected={setSelectedCriticidade} data={dataCriticidade} onSelect={() => atribuirParamCrit(dataCriticidade, selectedCriticidade)} placeholder="Selecione a Criticidade" />
    )
}

function atribuirParamCrit(data, selected) {
    data = data.filter(function (item) {
        return item.key == selected;
    }).map(({ value }) => descricaoCriticidade = { value });
    descricaoCriticidade = descricaoCriticidade.value;
    idCriticidade = selected;
}

function atribuirParamSensor(data, selected) {
    idSensor = selected.split('_')[0];
    metricInicial = selected.split('_')[1];
    metricFinal = selected.split('_')[2];
    data = data.filter(function (item) {
        return item.key == selected;
    }).map(({ value }) => descricaoSensor = { value });
    descricaoSensor = descricaoSensor.value;
}

function atribuirParamSetor(data, selected) {
    data = data.filter(function (item) {
        return item.key == selected;
    }).map(({ value }) => descricaoSetor = { value });
    descricaoSetor = descricaoSetor.value;
    idSensor = selected;
    console.log(descricaoSetor);
    console.log(idSensor);
}
function atribuirParamStatus(data, selected) {
    data = data.filter(function (item) {
        return item.key == selected;
    }).map(({ value }) => descricaoStatus = { value });
    descricaoStatus = descricaoStatus.value;
    idStatus = selected;
    console.log(descricaoStatus);
    console.log(idStatus);
}

const Status = () => {
    const [selectedStatus, setSelectedStatus] = React.useState("");
    const [dataStatus, setDataStatus] = React.useState([]);
    React.useEffect(() => {
        //Get Values from database
        const loadData = async () => {
            axios.get(Rotas.routesStatus + 'getAll')
                .then((response) => {
                    // Store Values in Temporary Array
                    let arrayOrigem = { key: 0, value: 'Selecione o Status' }

                    let newArray = response.data.map((item) => {
                        return { key: item._id, value: item.Descricao }
                    });
                    newArray.push(arrayOrigem);
                    newArray.sort((a, b) => (a.key > b.key) ? 1 : -1)
                    //Set Data Variable
                    setDataStatus(newArray)
                })
                .catch((e) => {
                    console.log(e)
                })
        };

        loadData();
    }, []);
    return (
        <SelectList setSelected={setSelectedStatus} data={dataStatus} onSelect={() => atribuirParamStatus(dataStatus, selectedStatus)} placeholder="Selecione o Status" />
    )
}

const Sensor = () => {
    const [selectedSensor, setSelectedSensor] = React.useState("");
    const [dataSensor, setDataSensor] = React.useState([]);
    React.useEffect(() => {
        //Get Values from database
        const loadData = async () => {
            axios.get(Rotas.routesSensor + 'getAll')
                .then((response) => {
                    // Store Values in Temporary Array
                    let arrayOrigem = { key: 0, value: 'Selecione o Sensor' }
                    let newArray = response.data.map((item) => {
                        return { key: item._id + '_' + item.metric_Inicial + '_' + item.metric_Final, value: item.name }
                    });
                    newArray.push(arrayOrigem);
                    newArray.sort((a, b) => (a.key > b.key) ? 1 : -1)
                    //Set Data Variable
                    setDataSensor(newArray)
                })
                .catch((e) => {
                    console.log(e)
                })
        };

        loadData();
    }, []);

    return (
        <SelectList setSelected={setSelectedSensor} data={dataSensor} onSelect={() => atribuirParamSensor(dataSensor, selectedSensor)} placeholder="Selecione o Sensor" />
    )
}





const Setor = () => {
    const [selectedSetor, setSelectedSetor] = React.useState("");
    const [datasetor, setDataSetor] = React.useState([]);
    React.useEffect(() => {
        //Get Values from database
        const loadData = async () => {
            axios.get(Rotas.routesSetor + 'getAll')
                .then((response) => {
                    // Store Values in Temporary Array
                    let arrayOrigem = { key: 0, value: 'Selecione o Setor' }

                    let newArray = response.data.map((item) => {
                        return { key: item._id, value: item.Nome }
                    });
                    newArray.push(arrayOrigem);
                    newArray.sort((a, b) => (a.key > b.key) ? 1 : -1)
                    //Set Data Variable
                    setDataSetor(newArray)
                })
                .catch((e) => {
                    console.log(e)
                })
        };

        loadData();
    }, []);
    return (
        <SelectList setSelected={setSelectedSetor} data={datasetor} onSelect={() => atribuirParamSetor(datasetor, selectedSetor)} placeholder="Selecione o Setor" />
    )
}

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
                            <Text style={styles.textCardStyle}>Incluir Equipamento</Text>
                            <View style={styles.cardStyle} >
                            </View>

                            <SafeAreaView style={styles.viewComponentes}>
                                <View style={styles.viewModalGeral}>
                                    <TextInput style={styles.textInputStyle}
                                        placeholder="Nome Equipamento"
                                        onChangeText={(text) => descricaoEquipamento = text}
                                        onChange={(text) => descricaoEquipamento = text}
                                        defaultValue={descricaoEquipamento}
                                    />

                                    <TextInput style={styles.textInputStyle}
                                        placeholder="TAG"
                                        onChangeText={(text) => descricaoTag = text}
                                        onChange={(text) => descricaoTag = text}
                                        defaultValue={descricaoTag}
                                    />
                                    <View style={styles.comboboxStyle}>
                                        <Criticidade></Criticidade>
                                    </View>
                                    <View style={styles.comboboxStyle}>
                                        <Sensor></Sensor >
                                    </View>
                                    <View style={styles.comboboxStyle}>
                                        <Setor></Setor >

                                    </View>

                                    <View style={styles.comboboxStyle}>
                                        <Status></Status >
                                    </View>


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
                <FontAwesome.Button style={estilos.botaoItemSalvar} onPress={() => this.setState({ modalVisible: true })} name="plus"
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
        paddingHorizontal: 5,
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