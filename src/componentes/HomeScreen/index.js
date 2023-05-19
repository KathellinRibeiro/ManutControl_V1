import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import estilos from './estilos';

import Graficos from './graficos';
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import { cores } from '../../estilos';

import Rotas from '../../RotasManut'


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[estilos.item, { backgroundColor }]}>
      <Graficos item={item}></Graficos>
    </TouchableOpacity>
  </View>

);

const App = () => {
  const [selectedId, setSelectedId] = useState();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch(Rotas.routesAlerta + 'getRegistros')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  const carregarLista = () => {
      fetch(Rotas.routesAlerta + 'getRegistros')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredData(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? cores.azulPrincipal : cores.azulClaro;
    const color = item._id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <>
      <SafeAreaView style={estilos.container}>
        <View style={estilos.botaoView}>
        <FontAwesome.Button style={estilos.botaoItem} onPress={() => [carregarLista()]} name="repeat"
        ></FontAwesome.Button>
        </View>
        
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          key={item => item._id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </>
  );
};

export default App;