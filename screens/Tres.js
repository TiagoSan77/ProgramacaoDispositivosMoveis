import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Tres() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.esquerda}></View>
        <View style={styles.direita}>
          <View style={styles.dircima}></View>
          <View style={styles.esqbaixo}></View>
        </View>
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
  dircima: {
    flex: 1,
    backgroundColor: 'teal',
  },
  esqbaixo: {
    flex: 1,
    backgroundColor: 'skyblue',
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
