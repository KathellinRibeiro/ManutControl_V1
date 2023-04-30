import React, {useState} from 'react';

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

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View>
 <TouchableOpacity onPress={onPress} style={[estilos.item, {backgroundColor}]}>
    {/* <Text style={[estilos.title, {color: textColor}]}>{item.title}</Text> */}
    <Graficos></Graficos> 
  </TouchableOpacity>
  </View>
 
);

const App = () => {
  const [selectedId, setSelectedId] = useState();


  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? cores.azulPrincipal : cores.azulClaro;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <>
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}        
      />
    </SafeAreaView>
    </>
  );
};

export default App;