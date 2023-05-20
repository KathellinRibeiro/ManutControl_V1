import React, { useState, useEffect } from 'react';
import Rotas from '../../RotasManut';
import estilos from './estilos';
import { Text,View} from 'react-native'
import { Card } from 'react-native-elements'

import FontAwesome from '@expo/vector-icons/FontAwesome';

const App = () => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesAlerta + 'getAllMes')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const carregarLista = () => {
        fetch(Rotas.routesAlerta + 'getAllMes')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                console.log(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const ItemView = () => {
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
            }))
    }

    return(
        
        <>
        <View style={estilos.botaoView}>
            <FontAwesome.Button style={estilos.botaoItem} onPress={() => [carregarLista()]} name="repeat"
            ></FontAwesome.Button>
        </View>
        
        <ItemView></ItemView>
    </>
    )
   

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
