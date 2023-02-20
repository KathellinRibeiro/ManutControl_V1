import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create({
    HomeScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SettingsScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },    
    NavigationContainer: {
        "backgroundColor": cores.azulPrincipal,
        color:cores.azulPrincipal,
    },
    tabBarOptions:{
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
