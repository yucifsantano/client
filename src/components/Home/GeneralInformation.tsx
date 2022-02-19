import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../../../constants'



const GeneralInformation = (props:any) => {
    const { datos } = props;
    const { id, name, username, phone, email, website } = datos;

    return (
        <View style={styles.container}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{username}</Text>
            <Text>{phone}</Text>
            <Text>{email}</Text>
            <Text>{website}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 15,
        width: SIZES.width - 50,
        height: 250,
        padding: 10,
        borderWidth: 0.75,
        borderRadius: SIZES.radius,
        borderColor: COLORS.colorSubTitle,


        backgroundColor: COLORS.colorBackgroundModal,
        ...FONTS.shadowObj
    },
})

export default GeneralInformation;