import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants'

const WIDTH = Dimensions.get('window').width;

const SearchModal = (props:any)  => {

    const closeModal = (bool:boolean, data:any) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    
    const renderItem = ({item}:{item:any}) => (
        <TouchableOpacity style={styles.containerTag} onPress={() => closeModal(false, item)}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.email.toUpperCase()}</Text>
        </TouchableOpacity>
    );
    const [masterData, setmasterData] = useState([]);
    const [filterdData, setfiltercData] = useState([]);
    const [search, setsearch] = useState('');
    const fetchPost = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setmasterData(responseJson);
            setfiltercData(responseJson);
        }).catch((error) => {
            console.error(error);
        })
    }
    const searchFilter = (text:string) => {
        if (text) {
            const newData = masterData.filter((item:any) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfiltercData(newData);
            setsearch(text);
        } else {
            setfiltercData(masterData);
            setsearch(text);
        }
    }

    useEffect(() => {
        fetchPost();
        return () => {}
    }, []);

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
                        onPress={() => closeModal(false, '')}
                    />
                </View>
                <View style={styles.modalBody}>
                    <TextInput
                        style={styles.input}
                        value={search}
                        placeholder='Qué quieres buscar...'
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => searchFilter(text)}
                        autoCapitalize='characters'
                        autoFocus={true}
                    />
                    <FlatList 
                        style={styles.listItemContainer}
                        data={filterdData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
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
    listItemContainer: {
        margin: 3,
        padding: 2,
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
    containerTag: {
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
  })

export {SearchModal}