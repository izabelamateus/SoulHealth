import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Informacao from './Informacao';
import Imc from './Imc';
import {styles} from '../../styles/styles';

export default function Content(){
    return(
        <View>
            <ScrollView>
                <View style={styles.viewImg}>
                    <Image source={require('../../img/img1.jpg')} style={styles.img}/>
                </View>
                <View>
                    <Informacao titulo1="Bem-vindo ao SoulHealth" subtitulo="O seu app de dicas de saúde"/>
                   
                </View>
                <View style={styles.bloco1}>  
                    <View style={styles.viewImg}>
                        <Image source={require('../../img/img2.jpg')} style={styles.img2}/>
                    </View>
                            
                    <Informacao titulo="Benefícios da chia quanto ao envelhecimento precoce" 
                                autor="Redaçao Site Minha Saúde"
                                conteudo={` A chia é uma semente – fonte natural de ácidos graxos ômega-3 (ácido alfa linolenico) e fibras. Possui ainda um baixo índice glicêmico – recomendada para diabéticos, e contém uma concentração significativa de antioxidantes.\n A semente de chia tem um grande potencial dentro da indústria alimentícia. Isso ocorre porque sua oxidação é mínima, comparada com outras fontes de ômega-3, como a linhaça, que apresenta uma decomposição rápida devido à ausência de antioxidantes.\n A oxidação afeta não só a qualidade dos alimentos, como também a sua saúde. Por isso, a adição de chia na dieta está relacionada à prevenção do envelhecimento precoce.`}/>
                </View> 
                <View style={styles.bloco2}>  
                    <View style={styles.viewImg}>
                        <Image source={require('../../img/img3.jpg')} style={styles.img2}/>
                    </View> 
                <Informacao titulo="IMC" autor="Tatiana Zanin" conteudo=" IMC significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura, o que pode interferir diretamente na saúde e qualidade de vida da pessoa. Assim, a partir do resultado do IMC é possível saber também se a pessoa está dentro do peso ideal e também identificar sobrepeso, obesidade ou desnutrição em crianças, adolescentes, adultos ou idosos. "/>
                </View>
                <Imc/>
                <View style={styles.bloco1}>  
                    <View style={styles.viewImg}>
                        <Image source={require('../../img/img4.jpg')} style={styles.img2}/>
                    </View>    
                    <Informacao titulo="O que é pilates?" autor="Nathalie Ayres" conteudo={` Chamado primeiramente de "contrologia", o pilates é um tipo de atividade física que busca o controle do músculos do corpo, fortalecendo a musculatura e melhorando seu tônus, além de conferir maior flexibilidade ao corpo. Hoje, alguns médicos a consideram uma forma de terapia, por ser um exercício individualizado.\n A técnica é mais próxima a um exercício de força e é conhecida por melhora do contorno corporal, além de trazer mais força, ajustar a postura e melhorar a musculatura do centro do corpo, chamada de core.\n O pilates é uma modalidade capaz de oferecer muitos benefícios ao praticante, promovendo maior consciência corporal e aumentando a flexibilidade. Além disso, sua prática pode ajudar a aumentar o prazer durante as relações sexuais.`}/>
                </View>
                <View style={styles.bloco2}>  
                    <View style={styles.viewImg}>
                        <Image source={require('../../img/img6.jpg')} style={styles.img2}/>
                    </View> 
                    <Informacao titulo="O que é Crossfit?" autor="Carlos Bruce" conteudo={` O crossfit é uma modalidade esportiva que tem como objetivo promover melhora da capacidade cardiorrespiratória, condicionamento físico e resistência muscular por meio da combinação de exercícios funcionais, que são aqueles cujos movimentos são realizados no dia a dia, e aeróbicos, que são realizados em alta intensidade, trazendo diversos benefícios para a saúde.\n Como os movimentos são variados e realizados em alta intensidade, a prática de crossfit promove melhora do condicionamento físico, ganho de massa muscular e garante mais força, resistência e definição muscular, além de também promover a saúde do corpo e da mente, já que há constante produção e liberação de hormônios relacionados à sensação de bem-estar.`}/>
                </View>
            </ScrollView>
        </View>
    )
}
