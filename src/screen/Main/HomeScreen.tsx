import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants/theme';

import CopyrightLabel from '../../components/CopyrightLabel';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.navigation}>
                <Text>Encabezado</Text>
            </View>

            <View style={styles.body}>
                <Text>Cuerpo</Text>
            </View>

            <View style={styles.footer}>
                <CopyrightLabel/>
            </View>
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
    navigation: {
        flex:1.15,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.colorTitleApp,
    },
    body: {
      flex:10,
      alignItems: 'center',
      justifyContent: 'center',
      width: '99%',
    },
    footer: {
      flex:0.45,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: COLORS.colorTitleApp,
    },
  });
  