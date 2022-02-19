import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../../../constants/theme';

import HeaderTabs from '../../components/HeaderTabs';
import CopyrightLabel from '../../components/CopyrightLabel';

export default function HomeScreen() {
    const [searchData, setsearchData] = useState('Shalimar');

    const dtsHeader = {
        page: 'home',
        title:'Inicio',
        backicon:true,
        busqueda:true,
        notifications:true,
        menuVertical:true,
    }
    const handleSearch = (data:any) => {
        console.log('REGRESO DEL ENCABEZADO!');
        console.log(data);
        if (!data.name) {
            setsearchData('Shalimar');
        } else {
            setsearchData(data.name);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HeaderTabs 
                datos={dtsHeader} 
                handleSearch={handleSearch}
            />

            <View style={styles.body}>
                <Text style={{fontFamily: 'Shalimar', fontSize: 75}}>{searchData}</Text>
                <Text style={{fontFamily: 'Staatliches', fontSize: 55}}>Staatliches</Text>
                <Text style={{fontFamily: 'PoiretOne', fontSize: 45}}>PoiretOne</Text>
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
  