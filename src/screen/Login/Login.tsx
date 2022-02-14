import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { useLogging } from '../../hooks/useLogging';
import { IStackScreenProps } from '../../library/StackScreenProps';
import { COLORS, SIZES, FONTS } from "../../../constants"

import ButtonGradient from '../../components/ButtonGradient';
import InputLabel from '../../components/InputLabel';


const LoginScreen: React.FunctionComponent<IStackScreenProps> = props => {
  const [logging] = useLogging('Application');
  const { navigation, route, nameProp } = props;

  useEffect(() => {
    logging.info({ navigation, route, nameProp });
  }, [logging]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.navigation}></View>

      <View style={styles.body}>
        <Text style={FONTS.headerapp}>Wallet</Text>
        <Text style={styles.subTitle}>Inicie sesión en su cuenta</Text>

        <InputLabel
          labelText='Ingresa tu correo electrónico'
          placeHolder='tucorrreo@correo.com'
          KeyboardType='email-address'
        />
        <InputLabel
          labelText='Clave de acceso'
          secureText={true}
        />

        <Text 
          style={styles.forgotPassword}
          onPress={(() => navigation.navigate('Forgot'))}
        >
          ¿Olvidaste tu contraseña?
        </Text>

        <ButtonGradient title='INGRESAR' />

        <Text 
          style={styles.forgotPassword}
          onPress={(() => navigation.navigate('CreateAccount'))}
        >
          No tengo una cuenta.
        </Text>

      </View>

      <View style={styles.footer}></View>
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
  navigation: {
      flex:1,
  },
  body: {
    flex:10,
    alignItems: 'center',
    width: '90%',
  },
  footer: {
    flex:1,
  },

  subTitle: {
    fontSize:20,
    color:'gray',
    marginBottom: 65,
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

export default LoginScreen;