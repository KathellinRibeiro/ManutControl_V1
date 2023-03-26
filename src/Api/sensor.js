import React, { useState, useEffect,Component } from 'react';

import axios from 'axios';
import Rotas from '../RotasManut';

const Api = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState([]);

    useEffect(() => {
        fetch(Rotas.routesSensor + 'getTest')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredData(responseJson);
                setMasterData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return masterData;
}
export default Api;