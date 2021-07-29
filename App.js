
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Header from './src/componentes/Header';
import Content from './src/componentes/Content'
import Footer from './src/componentes/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
      <Header/>  
      <Content/>
      <Footer/>
      </ScrollView>
      
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
