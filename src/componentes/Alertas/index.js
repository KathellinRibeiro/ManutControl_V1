import React, { useState, useEffect } from 'react';
import Rotas from '../../RotasManut';
import { View, SafeAreaView, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesAlerta + 'getAll')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setMasterData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        filteredData.map((u, i) => {
            return (
                <Card>
                    {
                        <>
                            <Text >Nome Sensor:{u.nameSensor}</Text>
                            <Text >Metrica: {u.metric}</Text>
                            <Text >Data:{u.time}</Text>
                            </>
                    }
                </Card>
            );
        })
    );
};






export default App;
