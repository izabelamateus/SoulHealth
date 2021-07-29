import React,{useState} from 'react';
 import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
 import {styles} from '../../styles/styles';


 export default function Imc(){
    const [valores, setValores] = useState({
        a:'',
        b:'',
        resultado:'',
        
    })

    const handleInputChange = (name, value) => {
        setValores({
            ...valores, [name]:value
        })
    }

  
    

    const calcula = () =>{
        let imc = (valores.a/(valores.b*valores.b)).toFixed(2)
        if(imc <= 18.4) {
            setValores({...valores, resultado: `IMC = ${imc} - Abaixo do peso \n  Fadiga, stress, ansiedade.`})
        }else if((imc>=18.5) && (imc <= 24.9)){
            setValores({...valores, resultado: `IMC = ${imc} - Peso normal \n  Menor risco de doenças cardíacas e vasculares.`})
        }else{
            setValores({...valores, resultado: `IMC = ${imc} - Acima do peso \n  Fadiga, má circulação, varizes.`})
        }
    }
         
    
    return(
        <View style={styles.boxCalcule}>
             <View>
                <Text style={styles.titulo2}>Calcule seu IMC</Text>
            </View>
            <View style={styles.linha}>
                <TextInput placeholder="Digite seu peso" onChangeText={(valor)=>handleInputChange("a", Number(valor))} keyboardType="numbers-and-punctuation" />
                <TextInput placeholder="Digite sua altura" onChangeText={(valor)=>handleInputChange("b", Number(valor))}  keyboardType="numbers-and-punctuation"/>
                <TouchableOpacity style={styles.botao} onPress={calcula}><Text>Calcular</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={styles.imc}>{valores.resultado}</Text>
            </View>
            
            
        </View>
    ) 
 }