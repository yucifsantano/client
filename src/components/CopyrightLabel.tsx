import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FONTS, COLORS } from '../../constants'

const CopyrightLabel = () => {
    return (
        <View style={styles.footerCopyright}>
            <Text style={FONTS.textCopyright}>CIERICORP TECHNOLOGY</Text>
            <Text style={FONTS.textCopyright}>Copyright 2022 V 22.02.16.09.56</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerCopyright: {
        flex:0.45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.colorTitleApp,
    }
})

export default CopyrightLabel;