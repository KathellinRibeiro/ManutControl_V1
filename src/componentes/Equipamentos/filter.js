import React, { useState, useEffect } from 'react';
import estilos from './estilos';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ModalEditar from './modalEditar';

import ComboboxCriticidade from './comboboxCriticidade'
import ComboboxSensor from './comboboxSensor'
import ComboboxSetor from './comboboxSetor'

import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
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
                    if (item.title) {
                        const itemData = item.title.toUpperCase();
                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    }
                });
            setFilteredData(newData);
        } else {
            setFilteredData(masterData);
        }
        setSearch(text);
    };

    const ItemView = ({ item }) => {
        return (
            <>
                <View style={estilos.item}>
                    <Text
                        onPress={() => getItem(item)}>
                        {item.id}
                        {' - '}
                        {item.title.toUpperCase()}
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
        alert('Id : ' + item.id + '\n\nTarefa : ' + item.title + '\n\nCompletada: ' + item.completed);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={estilos.container}>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilter(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Procure Aqui"
                />
                <ComboboxCriticidade style={styles.combobox}></ComboboxCriticidade>
                <ComboboxSensor></ComboboxSensor>
                <ComboboxSetor></ComboboxSetor>
                <FlatList
                    data={filteredData}
                    keyExtractor={item => item.id}
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