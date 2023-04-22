import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';
import Rotas from '../../../RotasManut';


const App = () => {

  const [selected, setSelected] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    //Get Values from database
    const loadData = async () => {
      axios.get(Rotas.routesSensor + 'getAll')
        .then((response) => {
          // Store Values in Temporary Array
          let newArray = response.data.map((item) => {
            return { key: item._id, value: item.Descricao }
          })
          //Set Data Variable
          setData(newArray)
        })
        .catch((e) => {
          console.log(e)
        })
    };

    loadData();
  }, [])

  return (
    <SelectList setSelected={setSelected} data={data} item={setSelected} onSelect={() => alert(selected)} placeholder="Selecione a Criticidade" />
  )

};
export default App;