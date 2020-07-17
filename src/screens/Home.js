import React, {useState} from 'react';

import { KeyboardAvoidingView, Text, View, Image, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import List from '../componentes/Lista';
import ClienteModal from '../componentes/ClienteModal';

export default ({navigation: {navigate}}) => {

    const [openModal, setOpenModal] = useState(false);
    const [idSelected, setIdSelected] = useState(null);

    let clientes = [];

    vendedores.map(item => {
        if(item.key == idSelected) {
            clientes = item.clientes.map(item => item);
        }
    });

return (
    <KeyboardAvoidingView style={styles.background}>
        
        <View style={styles.containerLogo}>
            <Image
            style = {styles.tamanhoImagem}
            resizeMode='contain'
            source={require('../assets/logo.jpg')}
            />
        </View>

        
        <Text style = {styles.Slogan}>
            SIMPLE MADE EASY
        </Text>

        <View style = {styles.containerFlatList}>
            <List setOpenModal={setOpenModal} setIdSelected={setIdSelected} data={vendedores} />
        </View>
            
         <Modal
            visible={openModal}
            onRequestClose={() => setOpenModal(false)}
            animationType="fade"
        >
            <FlatList data={clientes} renderItem={({item}) => <ClienteModal item={item} /> } /> 
        </Modal>

        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => navigate('CadastroCliente')}>
                <Text style={styles.buttonText} >Cadastrar Cliente</Text>            
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.button} onPress={() => navigate('CadastroVendedor')}>
                <Text style={styles.buttonText}>Cadastrar Vendedor</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
)}

const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },

    containerLogo:{
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },

    tamanhoImagem:{
        width: '140%'
    },

    Slogan:{
        marginBottom: 50,
        alignContent: 'center',
        fontSize: 20,
        fontStyle: 'italic'
    },

    container:{
        flex:1
    },
    button:{
        backgroundColor: '#E6E6E6',
        margin: 20,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,    
    },
    buttonText: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 20,
        fontWeight: 'bold'
    },

    containerFlatList: {
        width: 300,
        height: 150,
        backgroundColor: '#E6E6E6',
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row"
           
    },

    containerListBox: {
        flex: 1,
        backgroundColor: '#E6E6E6',
        //margin: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        //padding: 1,
        borderRadius: 10,
    },

    textItem: {
        fontSize: 15,
        padding: 5        
    },

    rowContainerFlatList: {
        flexDirection: "row"
    }
        
})

const vendedores = [
    {
        key:  '0', 
        info: 'Vendedor 1', 
        clientes: [
            { key: '0', name: "Claiton"},
            { key: '1', name: "Fabrício"},
            { key: '2', name: "Joséfa"},
            { key: '3', name: "Cleber"},        
        ]
    },
    {
        key: '1', 
        info: 'Vendedor 2', 
        clientes: [
            { key: '0',name: "Claiton"},
            { key: '1',name: "Francisca"},
            { key: '2',name: "Joãozinho"},
            { key: '3',name: "Pedrinho"},        
        ]
    },
    {
        key: '3', 
        info: 'Vendedor 3', 
        clientes: [
            { key: '0', name: "Claiton"},
            { key: '1', name: "Fabrício"},        
        ]
    }
]