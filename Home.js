import React from "react";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Menu de Exercícios</Text>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio1")}>Exercício 1: Metros para Centímetros</Button>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio2")}>Exercício 2: Km para Milhas</Button>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio3")}>Exercício 3: Cálculo do IMC</Button>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio4")}>Exercício 4: Preço com Desconto</Button>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio5")}>Exercício 5: Juros Simples</Button>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio6")}>Exercício 6: Juros Compostos</Button>
            <Button mode="contained" style={{marginBottom: 10}} onPress={() => navigation.navigate("Exercicio7")}>Exercício 7: Dias para Horas, Minutos e Segundos</Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})