import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';


const InputLabel = (
    {
        labelText, 
        placeHolder, 
        KeyboardType = 'default', 
        secureText = false
    }:{
        labelText?:string | any, 
        placeHolder?:string | any, 
        KeyboardType?:string | any, 
        secureText?:boolean | any
    }) =>  {

    return (
        <View style={styles.container}>
            <Text style={styles.labelInput}>{labelText}</Text>
            <TextInput
                placeholder={placeHolder}
                style={{...styles.textInput}}
                keyboardType={KeyboardType}
                secureTextEntry={secureText}
            />
        </View>
    )
}

export default InputLabel;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems:'center',
    },
    labelInput: {
      color: 'gray',
      top:19,
      height: 20,
    },
    textInput: {
      padding:10,
      width:'90%',
      height:50,
      marginTop:20,
      borderRadius: 0,
      borderBottomWidth:0.5,
      borderColor:'#ea9000',
      backgroundColor: '#ffdca5',
    },
  });