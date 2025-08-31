import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import exercicio1 from './Um'
import exercicio2 from './Dois'

const Stack = createNativeStackNavigator();

// Componente da tela inicial (Home)
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.moldura}>
        <View style={styles.logoContainer}>
          <Text style={styles.titulo}>Fatec</Text>
          <Text style={styles.subtitulo}>Jacarei</Text>
          <Text style={styles.professor}>Prof. Francisco de Moura</Text>
        </View>

        <View style={styles.homeContainer}>
          <Text style={styles.homeText}>HOME</Text>
        </View>

        <View style={styles.botoesContainer}>
          <View style={styles.coluna}>
            <TouchableOpacity 
              style={styles.botao} 
              onPress={() => navigation.navigate('Um')}
            >
              <Text style={styles.textoBotao}>Um</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Três</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Cinco</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Sete</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Nove</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.coluna}>
            <TouchableOpacity 
              style={styles.botao}
              onPress={() => navigation.navigate('Dois')}
            >
              <Text style={styles.textoBotao}>Dois</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Quatro</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Seis</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Oito</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Dez</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Componente principal com navegação
export default function Onze() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Menu Principal' }}
        />
        <Stack.Screen 
          name="Um" 
          component={exercicio1} 
          options={{ title: 'Exercício 1' }}
        />
        <Stack.Screen 
          name="Dois" 
          component={exercicio2} 
          options={{ title: 'Exercício 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  moldura: {
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    width: 300,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 0,
  },
  subtitulo: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  professor: {
    fontSize: 12,
    color: '#666',
  },
  homeContainer: {
    marginBottom: 20,
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  coluna: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  botao: {
    backgroundColor: '#f39c12',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 3,
    borderRadius: 6,
    width: 85,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
