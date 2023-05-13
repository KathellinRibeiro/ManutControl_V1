import React, { useState, useEffect } from 'react';
import Rotas from '../../RotasManut';
import { Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const App = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesAlerta + 'getAllMes')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setMasterData(responseJson);
                console.log(masterData)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        filteredData.map((u, i) => {
          { key: u._id }
            return (
                <Card key={i}>
                    {
                        <>
                            <Text >Nome Sensor:{u.name}</Text>
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
