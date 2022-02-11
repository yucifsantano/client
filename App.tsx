import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { useLogging } from './src/hooks/useLogging';
import * as Svg from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const  { width, height } = Dimensions.get('window');

export default function App() {
  const [logging] = useLogging('Application');

  useEffect(() => {
    logging.info('Loading application.');
  }, [logging]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Hola</Text>
      <Text style={styles.subTitle}>Inicie sesión en su cuenta</Text>
      <TextInput
        placeholder='minombre@correo.com'
        style={styles.textInput}
      >

      </TextInput>
      <TextInput
        placeholder='clave de acceso'
        style={styles.textInput}
      >

      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe2b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:80,
    color:'#000',
    fontWeight:'bold'
  },
  subTitle: {
    fontSize:20,
    color:'gray',
  },
  textInput: {
    padding:10,
    paddingStart:30,
    width:'80%',
    height:50,
    marginTop:20,
    borderRadius: 15,
    backgroundColor: '#fff',
  }
});
