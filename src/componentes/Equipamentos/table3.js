import React from "react";
import ReactTable from "react-table";

///var bands = require("../festivals/bands.json");


const data = [
    { select: false, equipamento: 'Chicken Biryani', setor: 21, name: '' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, name: 'male' },
   { select: false, equipamento: 'Chicken sharwma', setor: 21, name: 'male' },
   { select: false, equipamento: 'Chicken Biryani', setor: 21, name: 'male' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, name: 'male' },
   { select: false, equipamento: 'Chicken sharwma', setor: 21, name: 'male' },
   { select: false, equipamento: 'Chicken Biryani', setor: 21, name: 'male' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, name: 'male' },
   { select: false, equipamento: 'Chicken sharwma', setor: 21, name: 'male' },
   { select: false, equipamento: 'Chicken Biryani', setor: 21, name: 'male' }, //If user select this row then this whole object will return to you with select true in this case
   { select: false, equipamento: 'Chiken koofta', setor: 21, name: 'male' }
]

const nameOfCols = ['select', 'equipamento', 'setor', 'name'];
const FestivalTable = props => {
    const columns = [
      {
        width: 200,
        Header: "Time",
        accessor: "start"
      },
    //   {
    //     width: 300,
    //     Header: "name,
    //     accessor: "name",
    //     Cell: ({ cell }) => (
    //       <button value={cell.row.values.name} onClick={props.handleClickGroup}>
    //         {cell.row.values.name}
    //       </button>
    //     )
    //   }
    ];
  
    return (
        <>  <ReactTable
        data={data}
        columns={nameOfCols}
        minRows={0}
        showPagination={false}
        //getTdProps={bands.events}
      /></>
    
    );
  };

  class MyComponent extends React.Component {
    render() {
      return FestivalTable;
    }
  }
  
  export default MyComponent;
  