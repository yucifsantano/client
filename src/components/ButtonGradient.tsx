import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS } from '../../constants'

export default function ButtonGradient({title}:{title:string}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => console.log("Ir a pantalla inicial")}
        >
            <LinearGradient 
                colors={[COLORS.colorDegradadoBeginning, COLORS.colorDegradadoFinal]}
                start={{x:0,y:1}}
                end={{x:1,y:0}}
                style={styles.button}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </LinearGradient>            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        width:200,
        marginTop:60,
    },
    text: {
        ...FONTS.textButton
    },
    button: {
        width:'95%',
        height:50,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
    }
});
  