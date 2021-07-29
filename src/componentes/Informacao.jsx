import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles';

export default function Informacao(props){
    return(
        <View>
            <Text style={styles.titulo}>{props.titulo1}</Text>
            <Text style={styles.subtitulo}>{props.subtitulo}</Text>
            <Text style={styles.titulo2}>{props.titulo}</Text>
            <Text style={styles.autor}>{props.autor}</Text>
            <Text style={styles.texto}>{props.conteudo}</Text>
        </View>
    )
}