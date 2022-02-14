import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useLogging } from '../../hooks/useLogging';
import { IStackScreenProps } from '../../library/StackScreenProps';

import ButtonGradient from '../../components/ButtonGradient';
import HeaderBar from '../../components/HeaderBar';
import InputLabel from '../../components/InputLabel';

const CreateAccountScreen: React.FunctionComponent<IStackScreenProps> = props => {
  const [logging] = useLogging('Application');
  const { navigation, route, nameProp } = props;

  useEffect(() => {
    logging.info({ navigation, route, nameProp });
  }, [logging]);

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.navigation}>
        <HeaderBar title='Registrar cuenta' />
      </View>

      <View style={styles.body}>
        <Text style={styles.titulo}>Wallet</Text>
        <ScrollView>
          <View style={styles.formulario}>
            <Text style={styles.instructions}>
              Escribe tu correo, una clave de acceso, 
              confirma tu clave y te llegará un correo 
              de tu registro.
            </Text>

            <InputLabel
              labelText='Ingresa tu correo electrónico'
              placeHolder='tucorrreo@correo.com'
              KeyboardType='email-address'
            />
            <InputLabel
              labelText='Clave de acceso'
              secureText={true}
            />
            <InputLabel
              labelText='Confirmar clave de acceso'
              secureText={true}
            />
            
            <ButtonGradient title='Enviar información' />
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
    paddingTop:75,
    paddingBottom:45,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titulo: {
    fontSize:80,
    color:'#ea9000',
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.20)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10    
  },
});

export default CreateAccountScreen;