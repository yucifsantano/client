import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { useLogging } from '../../hooks/useLogging';
import { IStackScreenProps } from '../../library/StackScreenProps';

import ButtonGradient from '../../components/ButtonGradient';
import InputLabel from '../../components/InputLabel';
import { COLORS, SIZES, FONTS } from '../../../constants/theme';

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
        <Text style={styles.title}>Wallet</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.colorBackground,
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
  title: {
    fontSize: 80, 
    lineHeight: 136, 
    fontWeight:'bold',
    color: COLORS.colorTitleApp, 
    textShadowColor: COLORS.colorShadow, 
    textShadowOffset: {width: 0, height: 1}, 
    textShadowRadius: SIZES.radius,

  },
  subTitle: {
    ...FONTS.subtitle
  },
  forgotPassword: {
    marginTop:20,
    ...FONTS.textDefault,
  },
  button: {

  }
});

export default LoginScreen;