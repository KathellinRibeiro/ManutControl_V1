import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
    {
        name: 'Equipamento + metric',
    },
];




const App = () => {
    return (
        

        users.map((u, i) => {
            return (
                  
                    <Card>
                        {

                                <Text >{u.name}</Text>


                        }
                    </Card>
            );
        })


    );
};






export default App;
