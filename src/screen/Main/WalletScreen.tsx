import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants/theme';

import HeaderTabs from '../../components/HeaderTabs';
import CopyrightLabel from '../../components/CopyrightLabel';

import { TagCoins } from '../../components/Wallet/TagCoins';

export default function WalletScreen() {
    const dtsHeader = {
        page: 'wallet',
        title:'Cartera',
        backicon:true,
        busqueda:true,
        notifications:false,
        menuVertical:true
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeaderTabs datos={dtsHeader} />
            
            <View style={styles.body}>

                <View style={{ flexDirection: 'row' }}>
                    <TagCoins />
                    
                </View>
                
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
      width: '99%',
      marginTop: 10,
    },
  });
