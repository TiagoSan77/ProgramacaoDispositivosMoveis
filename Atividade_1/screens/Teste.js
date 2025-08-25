import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Dois() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.logoText}>
          <View style={styles.logo}>Logo</View>
          <View style={styles.paibotao}>
            <View style={styles.botaodir}>teste</View>
            <View style={styles.botaodir}>teste</View>
          </View>
        </View>
        <View style={styles.subcabecalho}></View>
        <View style={styles.blue}></View>
      </View>
  
      <View style={styles.bottom}>
      <View style={{flex:3,backgroundColor:'gray'}}></View>
      <View style={styles.rodape}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rodape:{
    flex:1,
    backgroundColor:'green'
  },
  logo:{
    padding:10
  },
  paibotao:{
    flexDirection:'row',
  },
  botaodir:{
    padding:10
  },
  logoText:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'red',
    justifyContent:'space-between',
    alignItems:'center'
  },
  subcabecalho:{
    flex:1/2,
    backgroundColor:'yellow'
  },
  cabecalho: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    backgroundColor: 'salmon',
  },
  blue:{
    flex:3,
    backgroundColor:'blue'
  }
});
