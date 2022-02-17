import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants'

const InputLabel = (
    {
        title, 
        subtitle, 
    }:{
        title?:string | any, 
        subtitle?:string | any, 
    }) =>  {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default InputLabel;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 5,
        padding: 3,
        paddingLeft: 10,
        height: 'auto',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
        borderLeftWidth: 5,
        borderColor: COLORS.colorTitleApp,
        backgroundColor: COLORS.colorBackgroundTag1,
    },
    title: {
      textAlign: 'left',
      fontFamily: "Staatliches", 
      fontSize: SIZES.text19,
      color: COLORS.colorTitleApp
    },
    subtitle: {
        textAlign: 'left',
        fontFamily: "Staatliches", 
        fontSize: SIZES.text14,
        color: COLORS.colorLabelText,
        paddingLeft:7,
      },
  });