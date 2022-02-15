import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useLogging } from '../../hooks/useLogging';
import { IStackScreenProps } from '../../library/StackScreenProps';

import ButtonGradient from '../../components/ButtonGradient';
import HeaderBar from '../../components/HeaderBar';
import InputLabel from '../../components/InputLabel';

import { COLORS, SIZES, FONTS } from '../../../constants/theme';

const ForgotPasswordScreen: React.FunctionComponent<IStackScreenProps> = props => {
  const [logging] = useLogging('Application');
  const { navigation, route, nameProp } = props;

  useEffect(() => {
    logging.info({ navigation, route, nameProp });
  }, [logging]);

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.navigation}>
        <HeaderBar title='Recuperar contraseña' />
      </View>

      <View style={styles.body}>
        <Text style={styles.titulo}>Wallet</Text>
        <ScrollView>
          <View style={styles.formulario}>
            <Text style={styles.instructions}>
              Te llegará un código a tu correo, este deberas 
              de ingresar para verificar autenticidad.
            </Text>

            <InputLabel
              labelText='Ingresa tu correo electrónico'
              placeHolder='tucorrreo@correo.com'
              KeyboardType='email-address'
            />
            <InputLabel
              labelText='Código de autenticidad'
              placeHolder='9999'
              KeyboardType='numeric'
            />

            <ButtonGradient title='Validar' />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.colorBackground,
  },
  navigation: {
      flex:1,
  },
  body: {
      flex:10,
      alignItems: 'center',
  },
  footer: {
    flex:1,
  },
  formulario: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    paddingTop:75,
    paddingBottom:45,
    ...FONTS.textInstructions,
  },
  titulo: {
    lineHeight: 136, 
    textShadowOffset: {width: 0, height: 1}, 
    textShadowRadius: SIZES.radius,
    ...FONTS.headerapp
  },
});

export default ForgotPasswordScreen;