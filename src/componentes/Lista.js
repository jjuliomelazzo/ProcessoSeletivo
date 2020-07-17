import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import RenderItem from './RenderItem';

export default ({data, setOpenModal, setIdSelected}) => {
    const [selected, setSelected] = useState(new Map());

    const onSelect = useCallback(
		(id) => {
			const newSelected = new Map(selected);
			newSelected.set(id, !selected.get(id));

			setSelected(newSelected);
		},
		[selected]
	);


    return (
        <FlatList            
            data = {data}
            style = {styles.containerListBox}
            keyExtractor={vendedor => vendedor.key}
            extraData={selected} 
            renderItem={({ item }) => (
                <RenderItem
                    setIdSelected={setIdSelected}
                    setOpenModal={setOpenModal}
                    data={item}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                    setSelected={setSelected}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    containerListBox: {
        flex: 1,
        backgroundColor: '#E6E6E6',
        //margin: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        //padding: 1,
        borderRadius: 10,
    },
})