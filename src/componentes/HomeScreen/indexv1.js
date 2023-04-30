import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rotas from '../../RotasManut'


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








const Grafico = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const backgroundColor = cores.azulPrincipal;
  const color = 'black';

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
  
  console.log(filteredData)
  filteredData.map
    ((item) => {
      console.log(item)
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item._id)}
          backgroundColor={backgroundColor}
          textColor={color}
        />
      )
    });
}





const Item = ({ item, onPress, backgroundColor, textColor }) => {
  return (

    <View>
      <TouchableOpacity onPress={onPress} style={[estilos.item, { backgroundColor }]}>
        <Graficos ></Graficos>
      </TouchableOpacity>
    </View>

  )

};


export default Grafico;