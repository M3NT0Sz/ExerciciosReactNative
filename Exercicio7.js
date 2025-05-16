import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Exercicio7({ navigation }) {
  const [dias, setDias] = useState('');
  const [hms, setHms] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dias para Horas, Minutos e Segundos</Text>
      <TextInput label="Dias" value={dias} onChangeText={setDias} keyboardType="numeric" style={styles.input} />
      <Button mode="contained" onPress={() => {
        const d = parseFloat(dias);
        const horas = d * 24;
        const minutos = horas * 60;
        const segundos = minutos * 60;
        setHms(`${horas} horas, ${minutos} minutos, ${segundos} segundos`);
      }} style={styles.button}>Converter</Button>
      <Text>{hms}</Text>
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
