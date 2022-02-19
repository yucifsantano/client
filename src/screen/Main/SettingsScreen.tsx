import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../../constants/theme';

import HeaderTabs from '../../components/HeaderTabs';
import CopyrightLabel from '../../components/CopyrightLabel';

export default function SettingScreen() {
    const dtsHeader = {
        page: 'settings',
        title:'Ajustes',
        backicon:true,
        busqueda:false,
        notifications:false,
        menuVertical:false
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeaderTabs datos={dtsHeader} />
            
            <View style={styles.body}>
                <Text>Cuerpo de cupones</Text>
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
