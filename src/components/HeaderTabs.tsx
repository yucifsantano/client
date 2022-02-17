import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES, icons } from '../../constants'

import TagTitSubt from '../components/TagTitSubt';

let primeraVez:boolean = false;

const HeaderTabs = ({page, title, backicon, busqueda, notifications, menuVertical}:{page?: string, title?:string | any, backicon?:boolean, busqueda?:boolean, notifications?:boolean, menuVertical?:boolean }) => {
    const navigation = useNavigation();
    const [modalSearch, setModalSearch] = useState(false);
    const [modalNotification, setModalNotification] = useState(false);
    const [modalMenuRight, setMenuRight] = useState(false);

    if (!primeraVez) {
        console.log('*** page: ' + page);
        primeraVez = true;
    }
    
    console.log(primeraVez);
    
    if (page === 'home') {
        useEffect(() => {
            console.log('busqueda');
            fetchPost();
            return () => {}
        }, []);
    }


    const renderItem = ({item}:{item:any}) => (
        <TagTitSubt 
            title={item.name}
            subtitle={item.email.toUpperCase()}
        />
    );


    const [filterdData, setfiltercData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    const fetchPost = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/users';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setmasterData(responseJson);
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

    return (
        <View style={styles.container}>

            <Modal visible={modalSearch} animationType='slide' transparent={true} >

                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Ionicons 
                            name='close-circle'
                            size={24}
                            color= {COLORS.colorInputText}
                            onPress={() => setModalSearch(false)}
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

            </Modal>

            <Modal visible={modalNotification} animationType='slide' transparent={true} >
                <View style={styles.modalContainer}>
                    <View style={{alignItems:'flex-end'}}>
                        <Ionicons 
                            name='close'
                            size={24}
                            onPress={() => setModalNotification(false)}
                        />
                    </View>
                    <Text>Pantalla modal de notificaciones! :)</Text>
                </View>
            </Modal>

            <Modal visible={modalMenuRight} animationType='fade' transparent={true} >
                <View style={styles.modalContainerMenu}>
                    <View style={{alignItems:'flex-end'}}>
                        <Ionicons 
                            name='close'
                            size={24}
                            onPress={() => setMenuRight(false)}
                        />
                    </View>
                    <Text>Menu!</Text>
                </View>
            </Modal>

            <View style={styles.containerLeft}>
                <TouchableOpacity
                    style={styles.containerTocuhable}
                    onPress={() => navigation.goBack()}
                >
                    {backicon ? <Ionicons style={styles.iconBack} name='arrow-back' size={25} color={COLORS.colorTitleApp} /> : <Text style={{width: 25}}></Text>}
                    <Text style={styles.textTitle}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerRight}>
                <TouchableOpacity style={styles.containerTocuhable}>
                    {busqueda ? <Ionicons onPress={(() => setModalSearch(true))} style={styles.iconSearch} name='search' size={25} color={COLORS.colorTitleApp} /> : null }
                    {notifications ? <Ionicons onPress={(() => setModalNotification(true))} style={styles.iconNotification} name='notifications' size={25} color={COLORS.colorTitleApp} /> : null }
                    {menuVertical ? <Ionicons onPress={(() => setMenuRight(true))} style={styles.iconEllipsis } name='ellipsis-vertical' size={25} color={COLORS.colorTitleApp} /> : null }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
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
    listItemContainer: {
        margin: 3,
        padding: 2,
    },
    modalContainer: {
        width: '90%',
        height: '85%',
        marginLeft: 20,
        marginTop: 55,
        borderWidth: 2.50,
        borderRadius: 8,
        padding: 0,
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
    modalContainerMenu: {
        width: '75%',
        height: '45%',
        marginLeft: '23%',
        marginTop: 55,
        borderWidth: 0.75,
        borderRadius: 8,
        padding: 10,
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
    container: {
        paddingTop:35,
        paddingBottom: 15,
        paddingHorizontal:24,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.colorTitleApp,
    },
    containerTocuhable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerLeft: {
        flex:1, 
        alignItems:'flex-start',
    },
    containerRight: {
        flex:1, 
        alignItems:'flex-end',
    },
    textTitle: {
        flex:1,
        textAlign:'left',
        paddingLeft: 2,
        textTransform:'uppercase',
        textShadowOffset: {width: 0.75, height: 0.25}, 
        textShadowRadius: 0.50,
        ...FONTS.textHeader
    },
    iconBack: {
        width: 25, 
        color: COLORS.colorTitleApp,
    },
    iconSearch: {
        width: 50, 
        paddingLeft: 16.5,
        marginRight: 0.25,
        color: COLORS.colorIcon,
    },
    iconNotification: {
        width: 50, 
        paddingLeft: 16.5,
        marginRight: 0.25,
        color: COLORS.colorIcon,
    },
    iconEllipsis: {
        width: 30, 
        paddingLeft: 4,
        color: COLORS.colorIcon,
    },
})

export default HeaderTabs;