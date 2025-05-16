import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Exercicio3({ navigation }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cálculo do IMC</Text>
      <TextInput label="Peso (kg)" value={peso} onChangeText={setPeso} keyboardType="numeric" style={styles.input} />
      <TextInput label="Altura (m)" value={altura} onChangeText={setAltura} keyboardType="numeric" style={styles.input} />
      <Button mode="contained" onPress={() => setImc((parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2))} style={styles.button}>Calcular IMC</Button>
      <Text>IMC: {imc}</Text>
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
