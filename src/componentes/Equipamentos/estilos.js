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
        color: '#FFFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: cores.azulClaro,
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
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
