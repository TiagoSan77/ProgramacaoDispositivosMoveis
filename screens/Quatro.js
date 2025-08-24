import { Image,View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function Quatro() {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.top}>
              
              <View style={styles.esquerda}>
              
                  <Image source={require('../images/adaptive-icon.png')} style = {styles.imagem} />

              </View>
              
              <View style={styles.direita}>
                  <View style={styles.dircima}>
                   <Image source={require('../images/adaptive-icon.png')} style = {styles.imagem} />
                  </View>
                  <View style={styles.esqbaixo}>
                    <Image source={require('../images/adaptive-icon.png')} style = {styles.imagem} />
                  </View>
          </View>
    </View>
          <View style={styles.bottom}>
            <Image source={require('../images/adaptive-icon.png')} style = {styles.imagem} />
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imagem:{
    flex:1,
    alignSelf:'center',
    resizeMode:'contain'
  },
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
