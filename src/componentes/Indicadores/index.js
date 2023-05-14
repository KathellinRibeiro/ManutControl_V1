import React, { useState, useEffect } from 'react';
import estilos from './estilos';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Rotas from '../../RotasManut';
import {
    ProgressChart,
} from "react-native-chart-kit";


let descricaoEditadaHoras;
let descricaoEditadaDias;
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    TextInput
} from 'react-native';

export default function Equipamentos() {
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesIndicadores + 'getIndicadorMtbf/8')
            .then((response) => response.json())
            .then((responseJson) => {
                setMasterData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        async function fetchData() {
            await delay(1000);
        }

        fetchData();
    });

    const Lista = () => {
        async function fetchData() {
            fetch(Rotas.routesIndicadores + 'getIndicadorMtbf/' + descricaoEditadaHoras)
                .then((response) => response.json())
                .then((responseJson) => {
                    setMasterData(responseJson);
                    setFilteredData(responseJson);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        fetchData();
    };

    const Item = () => (
        useEffect(() => {
            async function fetchData() {
                await delay(100000);
            }

            fetchData();
        }),

        <>
            <View>
                <Text style={styles.header}>Indicador MTBF mês {masterData[0].mes} </Text>
                <ProgressChart
                    data={[masterData[0].porcentagemDisponibilidade, 1]}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    hideLegend={false}
                    chartConfig={chartConfig}
                    style={{
                        marginLeft: 8,
                        borderRadius: 16,
                    }}
                />
                <Text style={styles.texto} >Disponibilidade Ideal em Horas: {masterData[0].tempoUtil}</Text>
                <Text style={styles.texto} >Disponibilidade Real em Horas:{masterData[0].disponibilidade}</Text>
                <Text style={styles.texto} >Quantidade de Paradas:{masterData[0].quantidadeQuebra}</Text>
            </View>
        </>
    );

    if (masterData.length > 0) {
        return (
            <>
                <TextInput style={estilos.textInputStyle}
                    onChangeText={(text) => descricaoEditadaHoras = text}
                    onChange={(text) => descricaoEditadaHoras = text}
                    defaultValue={descricaoEditadaHoras}
                    placeholder='Horas programadas em operação'
                />
                <TextInput style={estilos.textInputStyle}
                    onChangeText={(text) => descricaoEditadaDias = text}
                    onChange={(text) => descricaoEditadaDias = text}
                    defaultValue={descricaoEditadaDias}
                    placeholder='Dias programados em operação'
                />
                <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => Lista()} name="search"
                ></FontAwesome.Button>
                <Item></Item>
            </>
        );
    }

    if (masterData.length == 0) {
        return (
            <>
                <TextInput style={estilos.textInputStyle}
                    onChangeText={(text) => descricaoEditadaHoras = text}
                    onChange={(text) => descricaoEditadaHoras = text}
                    defaultValue={descricaoEditadaHoras}
                />
                <FontAwesome.Button style={estilos.botaoItemEditar} onPress={() => Lista()} name="edit"
                ></FontAwesome.Button>
            </>
        )
    }
}

const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#3dcab1',
    backgroundGradientTo: '#3dcab1',
    decimalPlaces: 4,
    decimal: 4,
    color: (opacity = 0.2) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 100.00,
    useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
        marginTop: 8,
    },
    texto: {
        margin: 8,
        borderRadius: 16,
    }
});