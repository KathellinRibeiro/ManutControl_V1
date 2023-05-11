import React, { useState, useEffect } from 'react';

import Graficos from './grafico'
import axios from 'axios';

import Rotas from '../../RotasManut';
import {
    ProgressChart,
} from "react-native-chart-kit";


import {
    Text,
    View,
    Dimensions,
    StyleSheet
} from 'react-native';

export default function Equipamentos() {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesIndicadores + 'getIndicadorMtbf')
            .then((response) => response.json())
            .then((responseJson) => {
                setMasterData(responseJson);
                setFilteredData(responseJson);
                console.log(masterData)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    useEffect(() => {
        async function fetchData() {
            console.log('before');

            await delay(1000);

            console.log('after');
        }

        fetchData();
    });

  
    return (
        <>
            {/* <Graficos item={masterData}></Graficos> */}

            <View>
            <Text style={styles.header}>Indicador MTBF mês {masterData.mes} </Text>
            <ProgressChart
                data={[masterData.porcentagemDisponibilidade, 1]}
                width={Dimensions.get('window').width - 16}
                height={220}
                hideLegend={false}
                chartConfig={chartConfig}
                style={{
                    marginLeft: 8,
                    borderRadius: 16,
                }}
            />
            <Text style={styles.texto} >Disponibilidade Ideal em Horas: {masterData.tempoUtil}</Text>
            <Text style={styles.texto} >Disponibilidade Real em Horas:{masterData.disponibilidade}</Text>
            <Text style={styles.texto} >Quantidade de Paradas:{masterData.quantidadeQuebra}</Text>
        </View>
        </>
    );






    const GraficosItem = ({ item }) => {
        return (
            <Graficos item={item}></Graficos>
        );
    };
    /* return (
        <>
            <Graficos item={masterData}></Graficos>
        </>
    ); */
}


const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#3dcab1',
    backgroundGradientTo: '#3dcab1',
    decimalPlaces: 4,
    decimal:4,
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
        marginTop: 16,
    },
    texto: {
        margin: 8,
        borderRadius: 16,
    }
});