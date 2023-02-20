import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-native';

import TelaPadrao from './src/componentes/Menu/TelaPadrao';
import MenuBar from './src/componentes/MenuBar';
import MenuMaterial from './src/componentes/MenuMaterial'
import Rotas from './src/Rotas';

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  console.tron.log({
    curso: "alura"
  });
  return <>
  {/* <MenuBar></MenuBar> */}
 <TelaPadrao><MenuMaterial></MenuMaterial></TelaPadrao>
  
  {/* <TelaPadrao><MenuMaterial /></TelaPadrao> */}
  </>  
}
