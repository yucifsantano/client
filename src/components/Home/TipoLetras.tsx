import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TipoLetras = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'Shalimar', fontSize: 75}}>Shalimar</Text>
            <Text style={{fontFamily: 'Staatliches', fontSize: 55}}>Staatliches</Text>
            <Text style={{fontFamily: 'PoiretOne', fontSize: 45}}>PoiretOne</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '99%',
    },

})

export default TipoLetras;