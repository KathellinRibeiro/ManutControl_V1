import React, { useState, useEffect } from 'react';

import Graficos from './grafico'
import axios from 'axios';

import Rotas from '../../RotasManut';


export default function Equipamentos() {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesIndicadores + 'getIndicadorMtbf')
            .then((response) => response.json())
            .then((responseJson) => {
                setMasterData(responseJson);
                setFilteredData(responseJson);
                console.log(masterData)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    useEffect(() => {
        async function fetchData() {
            console.log('before');

            await delay(1000);

            console.log('after');
        }

        fetchData();
    });

    /*     useEffect(() => {
            async function makeRequest() {
                fetch(Rotas.routesIndicadores + 'routesIndicadores')
                .then((response) => response.json())
                .then((responseJson) => {
                    setMasterData(responseJson); 
                    setFilteredData(responseJson);   
                                         
                   console.log(masterData)
                })
                .catch((error) => {
                    console.error(error);
                }); 
              console.log('before');
        
              await delay(1000);
        
              console.log('after');
            }
            makeRequest();
          }, []);  */
    return (
        <>
            <Graficos item={masterData}></Graficos>
        </>
    );






    const GraficosItem = ({ item }) => {
        return (
            <Graficos item={item}></Graficos>
        );
    };
    /* return (
        <>
            <Graficos item={masterData}></Graficos>
        </>
    ); */
}