import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({title}:{title:string}) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => console.log("Ir a pantalla inicial")}
        >
            <LinearGradient 
                colors={['#ff9900', '#d88500']}
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
        fontSize: 14,
        color: '#000',
        fontWeight:'bold',
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
  