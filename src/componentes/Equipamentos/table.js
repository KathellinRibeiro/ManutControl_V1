import React from 'react';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import { cores } from '../../estilos';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    FormFeedback,
    FormGroup,
    FormText,
    Input,
    Label,
    Row,
} from 'reactstrap';
const urlDetails="";
const titleDetails="";

let buttonDetails = "<a href='" + urlDetails + "' title='" + titleDetails +"' class='dtDetails' data-target='#remoteModal1' data-toggle='modal' data-backdrop='static'><span class='glyphicon glyphicon-search'></span></a>";

// let buttonEdit = "<a href='"+urlEdit+"' title='"+titleEdit+"' class='dtEdit' data-target='#remoteModal' data-toggle='modal' data-backdrop='static'><span class='glyphicon glyphicon-pencil'></span></a>";

// let buttonDelete = "<a href='" + urlDelete + "' title='" + titleDelete +"' class='dtDelete' data-target='#remoteModal1' data-toggle='modal' data-backdrop='static'><span class='glyphicon glyphicon-remove'></span></a>";
const SomeCom = () => {

    //You can pass COL_TYPES.CHECK_BOX Column's value in true/false, by default it will be false means checkBox will be uncheck!

    const data = [
        { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: '' }, //If user select this row then this whole object will return to you with select true in this case
       { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' },
       { select: false, equipamento: 'Chicken sharwma', setor: 21, gender: 'male' },
       { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: 'male' }, //If user select this row then this whole object will return to you with select true in this case
       { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' },
       { select: false, equipamento: 'Chicken sharwma', setor: 21, gender: 'male' },
       { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: 'male' }, //If user select this row then this whole object will return to you with select true in this case
       { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' },
       { select: false, equipamento: 'Chicken sharwma', setor: 21, gender: 'male' },
       { select: false, equipamento: 'Chicken Biryani', setor: 21, gender: 'male' }, //If user select this row then this whole object will return to you with select true in this case
       { select: false, equipamento: 'Chiken koofta', setor: 21, gender: 'male' }
    ]

    const nameOfCols = ['select', 'equipamento', 'setor', 'gender'];

    return (
        <DataTable
            onRowSelect={(row) => { console.log('ROW => ', row) }}
            data={data}
            colNames={nameOfCols}
            colSettings={[{ name: 'select', type: COL_TYPES.CHECK_BOX }]}
            //   noOfPsetors={2} //number
            backgroundColor={cores.claro} //Table Background Color
            headerLabelStyle={{ color: 'grey', fontSize: 12 }} //Text Style Works
        />
    )
}

export default SomeCom;