import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Exercicio6({ navigation }) {
  const [capital, setCapital] = useState('');
  const [taxa, setTaxa] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [montante, setMontante] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juros Compostos</Text>
      <TextInput label="Capital" value={capital} onChangeText={setCapital} keyboardType="numeric" style={styles.input} />
      <TextInput label="Taxa (ex: 0.05)" value={taxa} onChangeText={setTaxa} keyboardType="numeric" style={styles.input} />
      <TextInput label="Período" value={periodo} onChangeText={setPeriodo} keyboardType="numeric" style={styles.input} />
      <Button mode="contained" onPress={() => setMontante((parseFloat(capital) * Math.pow(1 + parseFloat(taxa), parseFloat(periodo))).toFixed(2))} style={styles.button}>Calcular</Button>
      <Text>Montante: {montante}</Text>
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
