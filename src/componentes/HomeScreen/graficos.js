import React, { useState,useEffect } from 'react';
import estilos from './estilos'
import axios from 'axios';
import Rotas from '../../RotasManut'

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
import { Label } from 'reactstrap';

export default function Graficos({item}) {
  console.log(item[1])
  return (
    <View>
      <Text style={estilos.TextGrafico}>{item[0].name}</Text>
      <LineChart
        data={{
          labels: ["0","1", "2","3", "4", "5", "6","7", "8","9"],
          datasets: [
            {
              data: [
               item[0].metric,
               item[1].metric,
               item[2].metric,
               item[3].metric,
               item[4].metric,
               item[5].metric,
               item[6].metric,
               item[7].metric,
               item[8].metric,
               item[9].metric
              ]
            }
          ]
        }}
        width={(Dimensions.get("screen").width) - 70} // from react-native
        height={80}
        
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          justifyContent: 'center',
          marginVertical: 8,
          marginHorizontal: 2,
          padding: 2,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 4
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 6,
          borderRadius: 8
        }}
      />
    </View>
  )
}