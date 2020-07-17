import React, { useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

export default ({ item, onPress, style }) =>  (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
)
