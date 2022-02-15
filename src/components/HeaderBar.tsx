import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, FONTS, icons } from '../../constants'

const HeaderBar = ({title}:{title:string | any}) => {

    const navigation = useNavigation();

    return (
        <View style={{
            paddingTop:35,
            paddingBottom: 15,
            paddingHorizontal:24,
            flexDirection: 'row',
        }}>
            <View style={{ flex:1, alignItems:'flex-start'}}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
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
        </View>
    )
}

export default HeaderBar;