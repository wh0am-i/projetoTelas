import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Animatable from 'react-native-animatable'
import fontsLoaded from '../../../App'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    );
  } else {
    const navigation = useNavigation()
    return (
      <View style={styles.container} >
        <View style={styles.containerLogo}>
          <Text style={styles.title}>ASTRO NEWS</Text>
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} maxLength={30}>
            <Text></Text>
          </TextInput>
          <TextInput style={styles.input} maxLength={30}>
            <Text></Text>
          </TextInput>
        </View>

        <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#38A69D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 38,
    letterSpacing: -3,
    marginTop: 28,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 15,
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38A69D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 30,
    shadowColor: '#52006A',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  }
})