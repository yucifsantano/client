import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { useLogging } from './src/hooks/useLogging';
import ButtonGradient from './src/components/ButtonGradient';

const  { width, height } = Dimensions.get('window');

export default function App() {
  const [logging] = useLogging('Application');

  useEffect(() => {
    logging.info('Loading application.');
  }, [logging]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Wallet</Text>
      <Text style={styles.subTitle}>Inicie sesión en su cuenta</Text>
      <TextInput
        placeholder='minombre@correo.com'
        style={styles.textInput}
      />
      <TextInput
        placeholder='clave de acceso'
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>
        ¿Olvidaste tu contraseña?
      </Text>
      <ButtonGradient />
      <Text style={styles.forgotPassword}>
        No tengo una cuenta.
      </Text>
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
    color:'#ea9000',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.20)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10    
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
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop:20
  },
  button: {

  }
});
