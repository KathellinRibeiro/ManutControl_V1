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
    container: {
        paddingTop: 40,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight,
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
