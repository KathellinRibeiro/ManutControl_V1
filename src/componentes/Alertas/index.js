import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native'
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
                <SafeAreaView>
                    <Card>
                        {

                            <SafeAreaView 
                           /// key={i} 
                            >
                                <Text >{u.name}</Text>
                            </SafeAreaView>


                        }
                    </Card>
                </SafeAreaView>
            );
        })


    );
};






export default App;
