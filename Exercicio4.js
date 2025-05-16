import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Exercicio4({ navigation }) {
  const [preco, setPreco] = useState('');
  const [percentual, setPercentual] = useState('');
  const [precoDesconto, setPrecoDesconto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preço com Desconto</Text>
      <TextInput label="Preço" value={preco} onChangeText={setPreco} keyboardType="numeric" style={styles.input} />
      <TextInput label="% Desconto" value={percentual} onChangeText={setPercentual} keyboardType="numeric" style={styles.input} />
      <Button mode="contained" onPress={() => setPrecoDesconto((parseFloat(preco) * (1 - parseFloat(percentual) / 100)).toFixed(2))} style={styles.button}>Calcular</Button>
      <Text>Preço com desconto: {precoDesconto}</Text>
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
