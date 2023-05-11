import React, { useState, useEffect } from 'react';

import Graficos from './graficos';
import Filter from './filter'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import { cores } from '../../estilos';
import estilos from './estilos';

import Rotas from '../../RotasManut'

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Third Item',
  },
  {
    id: '5',
    title: 'Third Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'Third Item',
  },
  {
    id: '8',
    title: 'Third Item',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={[estilos.item, { backgroundColor }]}>
      {/* <Text style={[estilos.title, {color: textColor}]}>{item.title}</Text> */}
      <Graficos item={item}></Graficos>
    </TouchableOpacity>
  </View>

);

const App = () => {
  const [selectedId, setSelectedId] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  useEffect(() => {
    fetch(Rotas.routesAlerta + 'getRegistros')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
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