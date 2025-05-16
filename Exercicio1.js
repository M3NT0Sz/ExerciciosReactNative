import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Exercicio1({ navigation }) {
  const [metros, setMetros] = useState('');
  const [centimetros, setCentimetros] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metros para Centímetros</Text>
      <TextInput label="Metros" value={metros} onChangeText={setMetros} keyboardType="numeric" style={styles.input} />
      <Button mode="contained" onPress={() => setCentimetros((parseFloat(metros) * 100).toString())} style={styles.button}>Converter</Button>
      <Text>Centímetros: {centimetros}</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Home')} style={{marginTop: 30}}>Voltar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    width: 200,
  },
  button: {
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
});
