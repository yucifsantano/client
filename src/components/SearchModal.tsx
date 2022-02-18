import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../../constants'

const WIDTH = Dimensions.get('window').width;

const SearchModal = ()  => {
    return (
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Ionicons 
                        name='close-circle'
                        size={24}
                        color= {COLORS.colorInputText}
                    />
                </View>
                <View style={styles.modalBody}>
                    <TextInput
                        style={styles.input}
                        placeholder='Qué quieres buscar...'
                        underlineColorAndroid='transparent'
                        autoCapitalize='characters'
                        autoFocus={true}
                    />
                </View>


            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modalContainer: {
        width: WIDTH - 20,
        height: '85%',
        borderWidth: 2.50,
        borderRadius: 8,
        borderColor: COLORS.colorSubTitle,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 15,        
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 8,
        backgroundColor: COLORS.colorSubTitle, 
        height:40
    },
    modalBody: {
        flex:1,
        padding: 10,
        backgroundColor: COLORS.colorBackgroundModal,
    },
    input: {
        height: 40,
        margin: 3,
        borderWidth: 0.75,
        borderColor: COLORS.colorSubTitle,
        borderRadius: 6,
        padding: 10,
        fontFamily: 'PoiretOne',
        
    },
})

export {SearchModal}