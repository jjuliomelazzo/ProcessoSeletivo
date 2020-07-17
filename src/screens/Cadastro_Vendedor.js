import React from 'react';

import { KeyboardAvoidingView, Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { logValidationWarning } from 'jest-validate';

export default ({navigation: {navigate, Notification}}) => (
    <KeyboardAvoidingView>
        <View style={styles.containerTextoInicio}>
            <Text   style={styles.TextoInicio}> 
                Cadastre um novo cliente ou exclua um cliente existente.
            </Text>
        </View>
        
        
        <View>
            <TextInput 
                style = {{ padding: 20}}
                style = {styles.Campos}
                placeholder = "Nome"
                autocorrect = {false}
                onChange = {() => {}}
            />

            <TextInput
                style = {styles.Campos}
                placeholder = "Código (Tabela de Preço)"
                autocorrect = {false}
                onChange = {() => {}}
            />

            <TextInput
                style = {styles.Campos}
                placeholder = "Nascimento (dd/mm/aa)"
                autocorrect = {false}
                onChange = {() => {}}
            />

            <TextInput
                style = {styles.Campos}
                placeholder = "Cliente"
                autocorrect = {false}
                onChange = {() => {}}
            />
        </View>

        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.buttonConfirmar} >
                <Text style={styles.buttonTextConfirmar} >Confirmar Vendedor</Text>            
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.buttonExcluir} >
                <Text style={styles.buttonTextExcluir}>Excluir Vendedor</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.buttonNovo} onPress={() => navigate('CadastroCliente')}>
                <Text style={styles.buttonTextNovo}>Criar Cliente</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>    
)

const styles = StyleSheet.create({
    containerTextoInicio:{
        margin: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
    
    TextoInicio:{
        margin: 20,
        marginVertical: 4,
        alignContent: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    Campos:{
        backgroundColor: '#E6E6E6',
        alignContent: 'center',
        margin: 40,
        marginTop: 2,
        marginVertical: 8,
        borderRadius: 25
    },

    buttonConfirmar:{
        backgroundColor: '#3a6332',
        alignContent: 'center',
        margin: 70,
        marginTop: 50,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,    
    },
    buttonTextConfirmar: {
        color: '#fff',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    buttonExcluir:{
        backgroundColor: '#ff0000',
        margin: 70,
        marginTop: 2,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,    
    },
    buttonTextExcluir: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },

    buttonNovo:{
        backgroundColor: '#add8e6',
        margin: 70,
        marginTop: 2,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,    
    },
    buttonTextNovo: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
})