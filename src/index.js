import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import CadastroCliente from './screens/Cadastro_Cliente'
import CadastroVendedor from './screens/Cadastro_Vendedor'

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CadastroCliente" component={CadastroCliente}/>
            <Stack.Screen name="CadastroVendedor" component={CadastroVendedor}/>
        </Stack.Navigator>
    </NavigationContainer>
)