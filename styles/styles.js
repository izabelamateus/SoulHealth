//EE2B07 - vermelho
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header:{
        flex:1,
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#50CDF9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader:{
        fontSize: 35,
        color: '#EADFF0'
    },
    viewImg:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        marginTop:35,
        marginBottom:20,
        resizeMode: 'center',
        width: 370,
        height: 200
    },
    titulo:{
        fontSize: 25,
        fontWeight:'bold',
        textAlign:'center'
    },
    subtitulo:{
        textAlign:'center',
        fontSize: 20,
        marginBottom:5
    },
    img2:{
        marginTop:20,
        marginBottom:20,
        resizeMode: 'center',
        width: 330,
        height: 160
    },
    titulo2:{
        fontSize:20,
        textAlign:'center',
        marginBottom:5
    },
    autor:{
        textAlign:'right',
        margin: 5
    },
    texto:{
        textAlign:'justify',
        marginTop:5,
        marginBottom:10
    },
    bloco1:{
        padding:5,
        backgroundColor: '#ECEEEF'
    },
    bloco2:{
        padding:5,
        backgroundColor: '#ffffff'
    },
    linha:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20    
    },
    bloco3:{
        padding:5,
        backgroundColor: '#D0DCE6'
    },
    imc:{
        textAlign:'center',
        marginBottom: 20
    },
    boxCalcule:{
        margin:20
    },
    footer:{
        backgroundColor: '#50CDF9',
        
    },
    textFooter:{
        textAlign:'center'
    },
    botao:{
        backgroundColor:'#50CDF9',
        padding: 5,
        borderRadius:4
    }
})