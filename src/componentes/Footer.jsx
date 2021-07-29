import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles';

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.textFooter}>SoulHealth</Text>
            <Text style={styles.textFooter}>Izabela Mateus</Text>
        </View>
    )

}