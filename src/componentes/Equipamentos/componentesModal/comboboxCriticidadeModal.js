import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import axios from 'axios';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';

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
    <SelectList style={styles.comboboxStyle} setSelected={setSelected} data={data} onSelect={() => alert(selected)} placeholder="Criticidade" />
  )

};
export default App;
const styles = StyleSheet.create({
comboboxStyle: {
  borderColor: '#0066CC',
  backgroundColor:'#0066CC'

},
});
