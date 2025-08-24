import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Dois() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.esquerda}></View>
        <View style={styles.direita}></View>
      </View>
  
      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    flexDirection:'row'
  },
  esquerda: {
    flex: 1,
    backgroundColor: 'lime',
  },
  direita: {
    flex: 1,
    backgroundColor: 'aquamarine', 
  },
  bottom: {
    flex: 1,
    backgroundColor: 'salmon',
  }
});
