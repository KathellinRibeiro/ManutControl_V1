import React, { useState, useEffect } from 'react';
import estilos from './estilos';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ModalEditar from './modalEditar';
import axios from 'axios';
import ModalIncluir from './modalIncluir'
import { SelectList } from 'react-native-dropdown-select-list';

import ComboboxCriticidadeFilter from './comboboxCriticidade';
import ComboboxSensorFilter from './comboboxSensor';
import ComboboxSetorFilter from './comboboxSetor';


import Rotas from '../../RotasManut';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';


function editar(item) {
    console.log(item);
}
let itemCriticidade;
let itemSensor;
let itemSetor;

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
                        const teste = item.Criticidade.map(({ Descricao }) => itemCriticidade = { Descricao })
                        const itemData = teste[1].Descricao.toUpperCase();
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
                        const teste = item.Sensor.map(({ Descricao }) => itemSensor = { Descricao })
                        const itemData = teste[1].Descricao.toUpperCase();
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
                        const teste = item.Setor.map(({ Descricao }) => itemSetor = { Descricao })
                        const itemData = teste[1].Descricao.toUpperCase();
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

    const ItemView = ({ item }) => {
        return (
            <>
                <View style={estilos.item}>
                    <Text
                        onPress={() => editar()}>
                        Nome:
                        {item.Descricao.toUpperCase()}
                        {' - '}
                        {item.Tag}

                    </Text>

                    <Text
                        onPress={() => getItem(item)}>
                        Tag:
                        {item.Tag}

                    </Text>
                    <Text
                        onPress={() => getItem(item)}>
                        Status:
                        {item.Status.map(({ Descricao }) => <Text>{Descricao}</Text>)}
                    </Text>
                    <Text
                        onPress={() => getItem(item)}>
                        Sensor:
                        {item.Sensor.map(({ Descricao }) => <Text>{Descricao}</Text>)}
                    </Text>

                    <Text
                        onPress={() => getItem(item)}>
                        Criticidade:
                        {item.Criticidade.map(({ Descricao }) => <Text>{Descricao}</Text>)}
                    </Text>

                    <View style={estilos.containerItem}>

                        {/* <FontAwesome.Button style={estilos.botaoItemEditar} name="edit"
                        // onPress={}
                        ></FontAwesome.Button> */}

                        <ModalEditar></ModalEditar>
                        {/* <FontAwesome.Button style={estilos.botaoItemExcluir} name="remove"
                        // onPress={}
                        ></FontAwesome.Button> */}

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
});

export default App;