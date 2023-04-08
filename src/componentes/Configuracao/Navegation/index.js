import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cores } from '../../../estilos';
import { Text, View, Button } from 'react-native';
import { List, Checkbox } from 'react-native-paper';


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
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};




class MyComponent extends React.Component {


}






const HomeScreen  = ({ navigation }) => {

    

  const [state = {
    expanded: false,
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false,
    expanded5: false,
    expanded6: false
  }, setState] = React.useState("");

  

  const _handlePress = () =>
    setState = {
      expanded: state.expanded,
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false
    };
    const  _handlePres1 = () =>
    setState({
      expanded1: state.expanded1,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
    const _handlePres2 = () =>
    setState({
      expanded1: false,
      expanded: false,
      expanded2: state.expanded2,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
    const _handlePres3 = () =>
    setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: state.expanded3,
      expanded4: false,
      expanded5: false,
      expanded6: false
    });
    const _handlePres4 = () =>
    setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: state.expanded4,
      expanded5: false,
      expanded6: false
    });
    const _handlePres5 = () =>
    setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: state.expanded5,
      expanded6: false
    });
    const _handlePres6 = () =>
    setState({
      expanded1: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: state.expanded6
    });

      return (
        <>
          <List.Section title="Configurações">
            <List.Accordion
              title="Usuário"
              left={props => <List.Icon {...props} icon="folder" />}
              expanded={state.expanded}
              onPress={_handlePress}
            >
              <List.Item title="Gerenciar Usuário"
                onPress={() =>
                  navigation.navigate('Profile', { name: 'Jane' })
                }
              />
            </List.Accordion>     

            
                <List.Accordion
                    title="Equipamentos"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={state.expanded1}
                    onPress={_handlePres1}
                >
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion
                    title="Indicadores"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={state.expanded2}
                    onPress={_handlePres2}
                >
                    <List.Item title="MTTR" />
                    <List.Item title="MTBF" />
                    <List.Item title="Disponibilidade" />
                </List.Accordion>

                <List.Accordion
                    title="Sensor"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={state.expanded3}
                    onPress={_handlePres3}
                >
                    <List.Item title="Gerenciador de sensor" />
                </List.Accordion>

                <List.Accordion
                    title="Setor"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={state.expanded4}
                    onPress={_handlePres4}
                >
                    <List.Item title="Gerenciador de setor" />
                </List.Accordion>

                <List.Accordion
                    title="Status"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={state.expanded5}
                    onPress={_handlePres5}
                >
                    <List.Item title="Gerenciador de status" />
                </List.Accordion>


                <List.Accordion
                    title="Criticidade"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={state.expanded6}
                    onPress={_handlePres6}
                >
                    <List.Item title="Gerenciador de criticidade" 
                      
                    />
                </List.Accordion>         
          </List.Section>
        </>
    
      );

    

};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};




export default MyStack;