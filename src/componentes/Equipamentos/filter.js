import React, { useState, useEffect } from 'react';
import estilos from './estilos';
import ModalEditar from './modalEditar';
import axios from 'axios';
import ModalIncluir from './modalIncluir'
import { SelectList } from 'react-native-dropdown-select-list';
import Rotas from '../../RotasManut';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import {
    SafeAreaView,
    Modal,
    Pressable,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';


let itemCriticidade;
let itemSensor;
let itemSetor;

let itemOrigem;
let descricaoEditada;
let idOrigem;


let idEquipamento;
let descricaoEquipamento;


let descricaoTag;

let idCriticidadeOrigem;
let idCriticidade;
let descricaoCriticidade;


let idSensor;
let idSensorOrigem;
let descricaoSensor;
let metricInicial;
let metricInicialOrigem;
let metricFinalOrigem;
let metricFinal;

let idSetorOrigem;;
let idSetor;
let descricaoSetor;

let idStatusOrigem;;
let idStatus;
let descricaoStatus;


function editar() {
    //VALIDAR DEPOIS
    fetch(Rotas.routesEquipamento + 'update/' + idEquipamento, {
        method: 'PUT',
        body: JSON.stringify({
            "Descricao": descricaoEquipamento,
            "Tag": descricaoTag,
            "Status":
            {
                "_id": idStatus,
                "Descricao": descricaoStatus,
            }
            ,
            "Local":
            {
                "_id": idSetor,
                "Descricao": descricaoSetor,
            }
            ,
            "Criticidade": {
                "_id": idCriticidadeOrigem,
                "Descricao": descricaoCriticidade,
            },

            "Sensor": {
                "_id": idSensor,
                "Descricao": descricaoSensor,
                "metric_Inicial": metricInicial,
                "metric_Final": metricFinal,
            },

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(JSON.stringify(json)));
};

function handleChange(event) {
    setSelected({ ...selected, [event.targe.id]: event.target.value });
}

const Criticidade = () => {
    const [selectedCriticidade, setSelectedCriticidade] = React.useState({});

    const [dataCriticidade, setDataCriticidade] = React.useState("");
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
                    //newArray.sort((a, b) => (a.key > b.key) ? 1 : -1)
                    //Set Data Variable
                    setDataCriticidade(newArray)
                })
                .catch((e) => {
                    console.log(e)
                })
        };

        loadData();
    }, []);
    return (
        <SelectList key={idCriticidade} defaultOption={idCriticidadeOrigem} setSelected={setSelectedCriticidade} data={dataCriticidade} onSelect={() => atribuirParamCrit(dataCriticidade, selectedCriticidade)} placeholder={descricaoCriticidade} />
    )
}

function atribuirParamCrit(data, selected) {
    if (data) {
        data = data.filter(function (item) {
            return item.key == selected;
        }).map(({ value }) => descricaoCriticidade = { value });
        descricaoCriticidade = descricaoCriticidade.value
    };
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
    if (data) {
        data = data.filter(function (item) {
            return item.key == selected;
        }).map(({ value }) => descricaoSetor = { value });
        descricaoSetor = descricaoSetor.value;
    };
    idSetor = selected;
}
function atribuirParamStatus(data, selected) {
    data = data.filter(function (item) {
        return item.key == selected;
    }).map(({ value }) => descricaoStatus = { value });
    descricaoStatus = descricaoStatus.value;
    idStatus = selected;

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
        <SelectList setSelected={setSelectedStatus} data={dataStatus} onSelect={() => atribuirParamStatus(dataStatus, selectedStatus)} placeholder={descricaoStatus} />
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
        <SelectList setSelected={setSelectedSensor} data={dataSensor} onSelect={() => atribuirParamSensor(dataSensor, selectedSensor)} placeholder={descricaoSensor} />
    )
}



const Setor = () => {

    const [selectedSetor, setSelectedSetor] = React.useState({});
    const [datasetor, setDataSetor] = React.useState("");
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
                    setDataSetor(newArray);
                })
                .catch((e) => {
                    console.log(e)
                })
        };

        loadData();
    }, []);

    return (
        <SelectList key={idSensor} defaultOption={idSensorOrigem} setSelected={setSelectedSetor} data={datasetor} onSelect={() => atribuirParamSetor(datasetor, selectedSetor)} placeholder={descricaoSetor} />
    )
}

function AtribuiValores(item) {
    idEquipamento = item._id;
    descricaoEquipamento = item.Descricao;
    descricaoTag = item.Tag;
    idCriticidadeOrigem = item.Criticidade._id;
    idCriticidade = idCriticidadeOrigem;
    descricaoCriticidade = item.Criticidade.Descricao;
    descricaoSetor = item.Local.Descricao;
    idSetorOrigem = item.Local._id;
    idSetor = idSetorOrigem;
    idStatusOrigem = item.Status._id;
    idStatus = idStatusOrigem;
    descricaoStatus = item.Status.Descricao;
    descricaoSensor = item.Sensor.Descricao;
    idSensorOrigem = item.Sensor._id;
    idSensor = idSensorOrigem;
    metricInicialOrigem = item.Sensor.metric_Inicial;
    metricFinalOrigem = item.Sensor.metric_Final;
    metricInicial = metricInicialOrigem;
    metricFinal = metricFinalOrigem;
}

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    const [selectedCriticidade, setSelectedCriticidade] = React.useState("");
    const [dataCriticidade, setDataCriticidade] = React.useState([]);

    const [selectedSensor, setSelectedSensor] = React.useState("");
    const [dataSensor, setDataSensor] = React.useState([]);

    const [selectedSetor, setSelectedSetor] = React.useState("");
    const [datasetor, setDataSetor] = React.useState([]);


    const [modalVisible, setModalVisible] = useState(false);
    const [display, setDisplay] = useState('none');


    React.useEffect(() => {
        //Get Values from database
        const loadData = async () => {
            axios.get(Rotas.routesCriticidade + 'getAll')
                .then((response) => {
                    // Store Values in Temporary Array
                    let arrayOrigem = { key: 0, value: 'Selecione a Criticidade' }
                    let newArray = response.data.map((item) => {
                        return { key: item.Descricao, value: item.Descricao }
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

    React.useEffect(() => {
        //Get Values from database
        const loadData = async () => {
            axios.get(Rotas.routesSensor + 'getAll')
                .then((response) => {
                    // Store Values in Temporary Array
                    let arrayOrigem = { key: 0, value: 'Selecione o Sensor' }
                    let newArray = response.data.map((item) => {
                        return { key: item._id, value: item.name }
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
    }, [])

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
    }, [])

    useEffect(() => {
        fetch(Rotas.routesEquipamento + 'getAll')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setMasterData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

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

    const searchFilterCriticidade = (text) => {
        if (text) {
            const newData = masterData.filter(
                function (item) {
                    if (item.Criticidade) {
                        itemCriticidade = '';
                        const itemData = item.Criticidade.Descricao.toUpperCase();
                        const textData = selectedCriticidade.toUpperCase();
                        return itemData.indexOf(textData) > -1;

                    }
                });
            setFilteredData(newData);
        }
        else {
            setFilteredData(masterData);
        }
    };
    const searchFilterSensor = (text) => {
        if (text) {
            const newData = masterData.filter(
                function (item) {
                    if (item.Sensor) {
                        itemSensor = '';
                        const teste = item.Sensor.Descricao
                        const itemData = teste.toUpperCase();
                        const textData = selectedSensor.toUpperCase();
                        return itemData.indexOf(textData) > -1;

                    }
                });
            setFilteredData(newData);
        }
        else {
            setFilteredData(masterData);
        }
    };


    const searchFilterSetor = (text) => {
        if (text) {
            const newData = masterData.filter(
                function (item) {
                    if (item.Setor) {
                        itemSetor = '';
                        const teste = item.Setor.Descricao
                        const itemData = teste.toUpperCase();
                        const textData = selectedSensor.toUpperCase();
                        return itemData.indexOf(textData) > -1;

                    }
                });
            setFilteredData(newData);
        }
        else {
            setFilteredData(masterData);
        }
    };


    const modalEditar = (item ) => {
        console.log(item)
        itemOrigem = item;  
        idOrigem=item._id;     
    
        idEquipamento = item._id;
        descricaoEquipamento = item.Descricao;
        descricaoTag = item.Tag;
        idCriticidadeOrigem = item.Criticidade._id;
        idCriticidade = idCriticidadeOrigem;
        descricaoCriticidade = item.Criticidade.Descricao;
        descricaoSetor = item.Local.Descricao;
        idSetorOrigem = item.Local._id;
        idSetor = idSetorOrigem;
        idStatusOrigem = item.Status._id;
        idStatus = idStatusOrigem;
        descricaoStatus = item.Status.Descricao;
        descricaoSensor = item.Sensor.Descricao;
        idSensorOrigem = item.Sensor._id;
        idSensor = idSensorOrigem;
        metricInicialOrigem = item.Sensor.metric_Inicial;
        metricFinalOrigem = item.Sensor.metric_Final;
        metricInicial = metricInicialOrigem;
        metricFinal = metricFinalOrigem;
        setDisplay('flex');
        console.log(idOrigem)
    }

    const ItemView = ({ item }) => {
        return (
            <>
                <View style={estilos.item}>

                    <Text
                        onPress={() => getItem(item)}>
                        Id:
                        {item._id}

                    </Text>
                    <Text
                        onPress={() => editar()}>
                        Nome:
                        {item.Descricao.toUpperCase()}

                    </Text>

                    <Text
                        onPress={() => getItem(item)}>
                        Tag:
                        {item.Tag}

                    </Text>

                    <Text
                        onPress={() => getItem(item)}>
                        Status:
                        <Text>{item.Status.Descricao}</Text>
                    </Text>
                    <Text
                        onPress={() => getItem(item)}>
                        Sensor:
                        <Text>{item.Sensor.Descricao}</Text>
                    </Text>
                    <Text
                        onPress={() => getItem(item)}>
                        Criticidade:
                        <Text>{item.Criticidade.Descricao}</Text>
                    </Text>

                    <View style={estilos.containerItem}>
                    <FontAwesome.Button style={estilos.botaoItemEditar } onPress={() => [modalEditar(item), setDisplay('flex'), setModalVisible(true)]} name="edit"
                        ></FontAwesome.Button>
                        <FontAwesome.Button style={estilos.botaoItemExcluir} onPress={() => excluirItem(item)} name="remove"
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
            <View style={estilos.container}>
                {/*   <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => this.setState({ modalVisible: true })} name="edit"
                // onPress={}
                ></FontAwesome.Button> */}
                <ModalIncluir></ModalIncluir>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilter(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Procure Aqui"
                />
                <SelectList setSelected={setSelectedCriticidade} data={dataCriticidade} item={setSelectedCriticidade} onSelect={() => searchFilterCriticidade(selectedCriticidade)} placeholder="Selecione a Criticidade" />
                <SelectList setSelected={setSelectedSensor} data={dataSensor} item={setSelectedCriticidade} onSelect={() => searchFilterSensor(selectedSensor)} placeholder="Selecione o Sensor" />
                <SelectList setSelected={setSelectedSetor} data={datasetor} item={setSelectedCriticidade} onSelect={() => searchFilterSetor(selectedSetor)} placeholder="Selecione o Setor" />
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item._id}
                    renderItem={ItemView}
                />

            </View>
            <View>
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
                                <Text style={styles.textCardStyle}>Editar Setor</Text>
                                <View style={styles.cardStyle} >
                                </View>

                                <SafeAreaView style={styles.viewComponentes}>
                                    <View style={styles.viewModalGeral}>
                                        <Text style={styles.text}>{idOrigem}</Text>
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
                                        <Criticidade option={{ idCriticidadeOrigem }} setSelected={idCriticidadeOrigem}></Criticidade>
                                    </View>
                                    <View style={styles.comboboxStyle}>
                                        <Sensor option={{ idSetorOrigem }} setSelected={idSetorOrigem}></Sensor >
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
                                        onPress={() => [editar(), setModalVisible(false), setDisplay('none')]}>
                                        <Text style={styles.textStyle}>Salvar</Text>
                                    </Pressable>

                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => [setModalVisible(false), setDisplay('none')]}>
                                        <Text style={styles.textStyle}>Cancelar</Text>
                                    </Pressable>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: 'white',
    },
    itemStyle: {
        backgroundColor: '#0066CC',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        color: 'white',
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
    },
    combobox: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#0066CC',
    },
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