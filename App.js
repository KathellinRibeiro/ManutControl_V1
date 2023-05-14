import React from 'react';
//import Index from '../ManutControl/src/componentes/index'
import Index from '../ManutControl/src/componentes/Usuario'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/Menu/TelaPadrao';
import MenuMaterial from './src/componentes/MenuMaterial'

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  return <>
    {/* <Index></Index> */}
    <TelaPadrao><MenuMaterial></MenuMaterial></TelaPadrao>
  </>
}
