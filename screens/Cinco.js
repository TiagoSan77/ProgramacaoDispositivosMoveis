import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function Cinco() {
  const clicar = () => {
    alert('Você clicou aqui!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View style={styles.esquerda}>
          <TouchableOpacity style={{ flex: 1 }} onPress={clicar}>
            <Image
              source={require('../images/adaptive-icon.png')}
              style={styles.imagem}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.direita}>
          <View style={styles.dircima}>
            <Image
              source={require('../images/adaptive-icon.png')}
              style={styles.imagem}
            />
          </View>

          <View style={styles.esqbaixo}>
            <Image
              source={require('../images/adaptive-icon.png')}
              style={styles.imagem}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Image
          source={require('../images/adaptive-icon.png')}
          style={styles.imagem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    height:64,
    width:64
  },
  top: {
    flex: 1,
    flexDirection: 'row',
  },
  esquerda: {
    flex: 1,
    backgroundColor: 'lime',
  },
  direita: {
    flex: 1,
    backgroundColor: 'aquamarine',
  },
  dircima: {
    flex: 1,
    backgroundColor: 'teal',
  },
  esqbaixo: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'salmon',
  },
});
