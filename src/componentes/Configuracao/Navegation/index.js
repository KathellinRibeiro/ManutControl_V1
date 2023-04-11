import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cores } from '../../../estilos';

import Criticidade from '../Criticidade'
import { List, Checkbox } from 'react-native-paper';

import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: cores.azulPrincipal,
    text: 'rgb(242, 242, 242)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)'
  },
};


const Stack = createNativeStackNavigator();

const MyStack = () => {

  return (    
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyComponent}
        options={{ title: 'Configurações' }}
      />
      <Stack.Screen name="Usuario" component={UsuarioScreen} />
    </Stack.Navigator>
  );
};




class MyComponent extends React.Component {
  state = {
    expanded: false,
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false,
    expanded5: false,
    expanded6: false
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
  _handlePres1 = () =>
    this.setState({
      expanded1: !this.state.expanded1,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
  _handlePres2 = () =>
    this.setState({
      expanded1: false,
      expanded: false,
      expanded2: !this.state.expanded2,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
  _handlePres3 = () =>
    this.setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: !this.state.expanded3,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
  _handlePres4 = () =>
    this.setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: !this.state.expanded4,
      expanded5: false,
      expanded6: false
    });
  _handlePres5 = () =>
    this.setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: !this.state.expanded5,
      expanded6: false
    });
  _handlePres6 = () =>
    this.setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: !this.state.expanded6
    });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={style.container}>
          <ScrollView>
        <List.Section title="Configurações">
          <List.Accordion
            title="Usuário"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded}
            onPress={this._handlePress}
          >
            <List.Item title="Gerenciar Usuário"
              onPress={() =>
                navigate('Usuario')
              }
            />
          </List.Accordion>

          <List.Accordion
            title="Equipamentos"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded1}
            onPress={this._handlePres1}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Indicadores"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded2}
            onPress={this._handlePres2}
          >
            <List.Item title="MTTR" />
            <List.Item title="MTBF" />
            <List.Item title="Disponibilidade" />
          </List.Accordion>

          <List.Accordion
            title="Sensor"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded3}
            onPress={this._handlePres3}
          >
            <List.Item title="Gerenciador de sensor" />
          </List.Accordion>

          <List.Accordion
            title="Setor"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded4}
            onPress={this._handlePres4}
          >
            <List.Item title="Gerenciador de setor" />
          </List.Accordion>



          <List.Accordion
            title="Criticidade"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded6}
            onPress={this._handlePres6}
          >
            <List.Item title="Gerenciador de criticidade"
              onPress={() =>
                navigate('Usuario')
              }
            />
          </List.Accordion>
          <List.Accordion
            title="Status"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={this.state.expanded5}
            onPress={this._handlePres5}
          >
            <List.Item title="Gerenciador de status" />
          </List.Accordion>

        </List.Section>
        </ScrollView>
      </SafeAreaView>
    );
  }

}




const UsuarioScreen = ({ navigation, route }) => {
  return <Criticidade></Criticidade>;
};


const style = StyleSheet.create({
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
  filter: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0066CC',
  },
  botaoItem: {
    height: 40,
    borderColor: '#0066CC',
  },

  title: {
    fontSize: 32,
  },

});



export default MyStack;

