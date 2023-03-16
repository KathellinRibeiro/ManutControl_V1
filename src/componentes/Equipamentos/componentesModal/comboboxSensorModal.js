import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';

const App = () => {

  const [selected, setSelected] = React.useState("");
  const [data,setData] = React.useState([]);
  
  React.useEffect(() => {
    //Get Values from database
    const loadData = async () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Store Values in Temporary Array
        let newArray = response.data.map((item) => {
          return {key: item.id, value: item.name}
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
    <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)}  placeholder="Sensor" />
  )

};
export default App;