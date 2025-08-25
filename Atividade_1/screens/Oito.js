import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';



export default function Oito() {
  
    const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [texto,setTexto] = useState('');

        function alterar(){
        return(
            setTexto(`${email} ${senha}`)
        )
        }
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.moldura}>
                    <Text style={styles.cadastro}>Cadastro</Text>
          
                    <View style={styles.componentes}>
                                <Text style={styles.texto}>Email</Text>
                                <TextInput
                                keyboardType="email-address"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none" 
                                autoComplete="email" 
                                autoCorrect={false} 
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
                        <Text style={styles.texto}>Confirmação de senha</Text>
                        <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={senha}
                        onChangeText={setSenha}
                        />
                    </View>

                    
                    <View style={styles.botoes}>
                        <TouchableOpacity onPress={alterar}>
                        <View style={styles.botcadastrar}><Text style={styles.textobot}>Cadastrar-se</Text></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={alterar}>
                        <View style={styles.botlogar}> <Text style={styles.textobot}>Logar</Text></View>
                        </TouchableOpacity>
                        
                        
                    </View>

                    <View style={styles.result}>
                        <Text style = {styles.texto}>{texto}</Text>
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