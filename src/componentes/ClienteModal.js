import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({item}) => (
    <View style={styles.container}>
        <Text style={styles.cliente}>{item.name}</Text>
    </View>
)


const styles = StyleSheet.create({
    container: {

    },
    cliente: {

    }
})