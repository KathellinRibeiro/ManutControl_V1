import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';
import Rotas from '../../RotasManut';

axios.defaults.headers['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [data,setData] = React.useState([]);

  
  React.useEffect(() => {
    //Get Values from database
    const loadData = async () => {
    axios.get(Rotas.routesSensor+'getTest')
      .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
          return {key: item.name, value: item.name}
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
    <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)}  placeholder="Selecione o Sensor" />
  )

};
export default App;