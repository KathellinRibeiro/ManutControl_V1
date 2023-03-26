import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';
import Rotas from '../../RotasManut';

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [setor,setData] = React.useState([]);
  
  React.useEffect(() => {
    //Get Values from database
    const loadData = async () => {
    axios.get(Rotas.routesSetor+'getAll')
      .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
          return {key: item._id, value: item.Nome}
        })
        //Set Data Variable
        setData(newArray)
      })
      .catch((e) => {
        console.log(e)
      })
    };
      
      loadData();
    },[])

  return(
    <SelectList setSelected={setSelected} data={setor} onSelect={() => alert(selected)}  placeholder="Selecione o Setor" />
  )

};
export default App;