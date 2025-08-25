import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function Seis() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [texto, setTexto] = useState('');
  

  function alterar(){
     setTexto(`${nome}  ${idade}`);
  }
  return (
    <SafeAreaView style={styles.container}>


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


          <TouchableOpacity onPress={alterar}>
            <View style={styles.componentes}>
              <Text style={styles.botao}>Salvar</Text>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.texto}>{texto}</Text>
          </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  componentes:{
    paddingTop:8
  },
  botao:{
    backgroundColor:'#008aceff',
    color:'#FFFFFF',
    padding:10,
    marginTop:10,
    textAlign:'center',
    justifyContent:'center',
    borderRadius:10
  },
  texto:{
    color:'#FFFFFF'
  },
  container:{
    flex:1,
    backgroundColor:'#565252ff',
    justifyContent:'center',
    padding:8
  },
  input:{
    height:38,
    backgroundColor:'#FFFFFF',
    borderRadius:5
  }

})