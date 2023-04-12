import { StyleSheet, StatusBar } from 'react-native';
import { cores } from '../../estilos';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

export default StyleSheet.create({
    TextGrafico: {
        margin:1,
        color: '#FFFF',
        fontSize: 15
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: cores.azulClaro,
        height: 120,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        paddingTop:25,
        borderRadius: 20,
    },
    itemMaior: {
        backgroundColor: cores.azulClaro,
        height: 165,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        paddingTop:25,
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
    },

    filter: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#0066CC',
    },
    containerItem: {
        flexDirection: 'row-reverse',
        margin:0,
    },
    botaoItemExcluir: {
        justifyContent: 'center',
        backgroundColor: "#f00",
    },
    botaoItemEditar: {
        justifyContent: 'center',
        backgroundColor: "#008000",
    },

});
