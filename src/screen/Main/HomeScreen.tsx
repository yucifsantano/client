import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../../constants/theme';

import HeaderTabs from '../../components/HeaderTabs';
import CopyrightLabel from '../../components/CopyrightLabel';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeaderTabs 
                title={'Inicio'}
                backicon={true}
                busqueda={true}
                notifications={true}
                menuVertical={true}
            />

            <View style={styles.body}>
                <Text style={{fontFamily: 'Shalimar', fontSize: 75}}>Cuerpo de inicio</Text>
                <Text style={{fontFamily: 'Staatliches', fontSize: 55}}>Cuerpo de inicio</Text>
                <Text style={{fontFamily: 'PoiretOne', fontSize: 45}}>Cuerpo de inicio</Text>
            </View>

            <CopyrightLabel />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.colorBackground,
    },
    body: {
      flex:10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '99%',
    },
  });
  