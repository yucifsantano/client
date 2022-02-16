import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, FONTS, icons } from '../../constants'

const HeaderTabs = ({title}:{title?:string | any}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <TouchableOpacity
                    style={styles.containerTocuhable}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={ icons.back_arrow }
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: COLORS.colorTitleApp,
                        }}
                    />
                    <Text 
                        style={{
                            flex:1,
                            textAlign:'left',
                            paddingLeft:10,
                            textTransform:'uppercase',
                            ...FONTS.textHeader
                        }}
                    >
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerRight}>
                <TouchableOpacity style={styles.containerTocuhable}>
                    <Image 
                        source={ icons.back_arrow }
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: COLORS.colorTitleApp,
                        }}
                    />
                    <Image 
                        source={ icons.back_arrow }
                        resizeMode="contain"
                        style={{
                            width:25,
                            height:25,
                            tintColor: COLORS.colorTitleApp,
                        }}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default HeaderTabs;