import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Exercicio2({ navigation }) {
  const [km, setKm] = useState('');
  const [milhas, setMilhas] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quilômetros para Milhas</Text>
      <TextInput label="Quilômetros" value={km} onChangeText={setKm} keyboardType="numeric" style={styles.input} />
      <Button mode="contained" onPress={() => setMilhas((parseFloat(km) * 0.621371).toFixed(4))} style={styles.button}>Converter</Button>
      <Text>Milhas: {milhas}</Text>
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
