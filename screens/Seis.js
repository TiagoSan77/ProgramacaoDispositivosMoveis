import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Seis() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  function mostrarnatela() {
    alert(`Dados impressos na tela:\nNome: ${nome}\nIdade: ${idade}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.componentes}>
        <Text style={styles.texto}>Nome</Text>
        <TextInput
          keyboardType="default"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.componentes}>
        <Text style={styles.texto}>Idade</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
        />
      </View>

      <TouchableOpacity onPress={mostrarnatela}>
        <View style={styles.componentes}>
          <Text style={styles.botao}>Salvar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  componentes:{
    paddingTop:8
  },
  botao:{
    flex:1,
    backgroundColor:'#6DA5C0',
    color:'#FFFFFF',
    padding:10,
    textAlign:'center',
    justifyContent:'center',
    borderRadius:10
  },
  texto:{
    color:'#FFFFFF'
  },
  container:{
    flex:1,
    backgroundColor:'gray',
    justifyContent:'center',
    padding:8
  },
  input:{
    height:33,
    backgroundColor:'#FFFFFF',
    borderRadius:5
  }

})