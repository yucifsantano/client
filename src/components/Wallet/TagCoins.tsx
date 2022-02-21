//TagCoins
import React, { } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { FONTS, COLORS } from '../../../constants'
import { Ionicons } from '@expo/vector-icons';

const TagCoins = ()  => {

    return (
        <View style={styles.tagCoins}>
            <View style={{flex:1.5, alignItems:'center', paddingTop:23,}}>
                <Ionicons name={'logo-bitcoin'} size={35} color={COLORS.colorTitleApp} />
            </View>
            <View style={{flex:4, }}>
                <Text style={[FONTS.textInpunt,{backgroundColor:'white'}]}>Nombre moneda</Text>
                <Text style={[FONTS.textCopyright]}>subtitulo</Text>
                <View style={{paddingTop:12,paddingRight:5}}>
                    <Text style={{textAlign:'right'}}>$ 999,999,999.99</Text>
                    <Text style={{textAlign:'right'}}>-999.99%</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    tagCoins: {
        width: 250,
        height: 100,
        borderWidth: 0.75,
        borderColor: 'black',
        borderRadius: 6,
        margin: 5,
        backgroundColor: 'white',
        padding: 2,

        flexDirection: 'row',

        ...FONTS.shadowObj
    },

})

export {TagCoins}