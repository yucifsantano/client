import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { useLogging } from '../../hooks/useLogging';
import ButtonGradient from '../../components/ButtonGradient';
import HeaderBar from '../../components/HeaderBar';
import { IStackScreenProps } from '../../library/StackScreenProps';

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

            <Text>Ingresa tu correo electrónico</Text>
            <TextInput
              placeholder='minombre@correo.com'
              style={styles.textInput}
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
    backgroundColor: '#ffe2b5'
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
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
    textAlign:'center',
    paddingBottom:35,
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
});

export default ForgotPasswordScreen;