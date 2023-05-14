import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create({
    TopBar: {
        flex: 0, flexDirection: 'row',
        backgroundColor: cores.azulPrincipal,
        alignItems: 'center',
        marginTop: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        paddingTop: 15,
    },
    TopBarText: {
        flex: 0, flexDirection: 'row',
        backgroundColor: cores.azulPrincipal,
        justifyContent: 'flex-start',
    },
    TextTopBar: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFF',
        justifyContent: 'flex-start',
    },

    HomeScreen: {
        flex: 0, flexDirection: 'row',
        backgroundColor: cores.azulPrincipal,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        paddingTop: 15,
    },
    TabScreen: {
        flex: 1,
    },
    NavigationContainer: {
        "backgroundColor": cores.azulPrincipal,
        color: cores.azulPrincipal,
    },
    tabBarOptions: {
        activeTintColor: cores.claro,
        inactiveTintColor: cores.claro,
        activeBackgroundColor: cores.azulClaro,
        inactiveBackgroundColor: cores.azulPrincipal,
        style: {
            height: 70,
        },
        labelStyle: {
            width: '100%',
            flex: 1,
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: 15,
            marginTop: 1,
            paddingTop: 15,
            backgroundColor: cores.azulPrincipal
        },
        keyboardHidesTabBar: true,
    }

});