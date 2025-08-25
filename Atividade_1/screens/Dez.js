import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Dez() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [texto, setTexto] = useState('');
  const [perfil, setPerfil] = useState('Gestor');
  const [manterConectado, setManterConectado] = useState(false);

  function alterar() {
    setTexto(`${email} - ${senha} - ${confirmaSenha} - ${perfil} - ${manterConectado ? 'sim' : 'não'}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.moldura}>
        <View style={styles.componentes}>
          <Text style={styles.texto}>Email</Text>
          <TextInput
            keyboardType="default"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.componentes}>
          <Text style={styles.texto}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <View style={styles.componentes}>
          <Text style={styles.texto}>Confirmação da senha</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={confirmaSenha}
            onChangeText={setConfirmaSenha}
          />
        </View>
        <View style={styles.componentes}>
          <Text style={styles.texto}>Perfil</Text>
          <Picker
            selectedValue={perfil}
            onValueChange={setPerfil}
            style={{ color: '#000', backgroundColor: '#fff', borderRadius: 5 }}
          >
            <Picker.Item label="Gestor" value="Gestor" />
            <Picker.Item label="Usuário" value="Usuário" />
            <Picker.Item label="Admin" value="Admin" />
          </Picker>
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.texto}>Manter-se conectado</Text>
          <Switch
            value={manterConectado}
            onValueChange={setManterConectado}
            thumbColor={manterConectado ? '#f6e445ff' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity onPress={alterar}>
            <View style={styles.botlogar}><Text style={styles.textobot}>Logar</Text></View>
          </TouchableOpacity>
          <TouchableOpacity onPress={alterar}>
            <View style={styles.botcadastrar}><Text style={styles.textobot}>Cadastrar-se</Text></View>
          </TouchableOpacity>
        </View>
        <View style={styles.result}>
          <Text style={styles.texto}>{texto}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    result:{
        marginTop: 10
    },
    cadastro:{
        textAlign:'center',
        color:'yellow'
    },
    
    moldura:{
    borderWidth:1,
    borderColor:'#FFFFFF',
    width:270,
    padding:15
  },
  
    textobot:{
    color:'#000000'
  },
  
  botlogar:{
    backgroundColor:'#f6e445ff',
    height:38,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:8,
    marginTop:8,
    margin:5,
    borderRadius:6
  },
  botcadastrar:{
    backgroundColor:'#f6e445ff',
    height:38,
    width:110,
    justifyContent:'center',
    alignItems:'center',
    marginRight:8,
    marginTop:8,
    margin:5,
    borderRadius:6
  },
  botoes:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:5
  },
  componentes:{
    paddingTop:8
  },
  switchContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:8
  },
  botao:{
    flex:1,
    backgroundColor:'#e7fb83ff'
  },
  texto:{
    color:'#FFFFFF'
  },
  container:{
    flex:1,
    backgroundColor:'#4f4e4eff',
    justifyContent:'center',
    alignItems:'center',
    padding:8
  },
  input:{
    height:38,
    backgroundColor:'#FFFFFF',
    borderRadius:5
  }

})