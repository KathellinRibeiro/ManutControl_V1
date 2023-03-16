import React, { Component } from 'react';  
import ReactTable from "react-table";  
import { Text, View } from 'react-native';
// import "react-table/react-table.css";  
  
class App extends React.Component   {  
  render() {  
     const data = [{  
        name: 'Ayaan',  
        age: 26  
        },{  
         name: 'Ahana',  
         age: 22  
         },{  
         name: 'Peter',  
         age: 40      
         },{  
         name: 'Virat',  
         age: 30  
         },{  
         name: 'Rohit',  
         age: 32  
         },{  
         name: 'Dhoni',  
         age: 37  
         }]  
     const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       }]  
    return (  
          <View>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              />  
          </View>        
    )  
  }  
}  
export default App;  