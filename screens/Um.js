import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function Um() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={[styles.view, { backgroundColor: 'crimson' }]}>
        <Text>Olá mundo!</Text>
      </View>
      <View style={styles.view}>
        <Text>teste</Text>
      </View>
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
  },
  view: {
    flex: 1,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
