
import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ data, selected, onSelect, setOpenModal, setIdSelected }) => {
	return (
        <TouchableOpacity
            key={data.key}
            style={styles.button}
            onPress={() => {
                onSelect(data.key);
                setOpenModal(true);
                setIdSelected(data.key)
            }}
            selected={selected}
        >
            <Text style={styles.buttonText}>{data.info}</Text>
        </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#f2f2f2'
    }
})


