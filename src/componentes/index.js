import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './Menu/TelaPadrao';
import MenuMaterial from './MenuMaterial'

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  return <>
    <TelaPadrao><MenuMaterial></MenuMaterial></TelaPadrao>
  </>
}
