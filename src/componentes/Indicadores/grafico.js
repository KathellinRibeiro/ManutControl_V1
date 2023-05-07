import React, { useState, useEffect } from 'react';

import {
    ProgressChart,
} from "react-native-chart-kit";

import {
    Text,
    View,
    Dimensions,
    StyleSheet
} from 'react-native';

export default function Graficos({ item }) {
    console.log(item[0].tempoUtil)
    console.log(item)
    return (
        <View>
            <Text style={styles.header}>Indicador MTBF mês {item[0].mes} </Text>
            <ProgressChart
                data={[item[0].porcentagemDisponibilidade, 1]}
                width={Dimensions.get('window').width - 16}
                height={220}
                hideLegend={false}
                chartConfig={chartConfig}
                style={{
                    marginLeft: 8,
                    borderRadius: 16,
                }}
            />
            <Text style={styles.texto} >Disponibilidade Ideal em Horas: {item[0].tempoUtil}</Text>
            <Text style={styles.texto} >Disponibilidade Real em Horas:{item[0].disponibilidade}</Text>
            <Text style={styles.texto} >Quantidade de Paradas:{item[0].quantidadeQuebra}</Text>
        </View>
    )
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