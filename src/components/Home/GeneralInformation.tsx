import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constants'

import MapView, { Marker } from 'react-native-maps';

const GeneralInformation = (props:any) => {
    const { datos } = props;
    const { id, name, username, phone, email, website, address } = datos;

    const [geolocation, setgeolocation] = useState('');
    const [lat, setLatitude] = useState(parseFloat(address.geo.lat)); //20.5556124
    const [lng, setLongitude] = useState(parseFloat(address.geo.lng)); //-100.3610186

    const geo = () => {
        //setLatitude(parseFloat(address.geo.lat))
        //setLongitude(parseFloat(address.geo.lng))
        setLatitude(20.5556124)
        setLongitude(-100.3610186)
        setgeolocation('Lat: ' + lat +  ' Lng: ' + lng);
    }

    useEffect(() => {
        setLatitude(parseFloat(address.geo.lat))
        setLongitude(parseFloat(address.geo.lng))
        console.log(lat);
        console.log(lng);
        return () => {}
    }, []);


    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => (geo())}>
                <Text style={[FONTS.textHeader, {textAlign:'center', fontSize: SIZES.text17, color: COLORS.colorAlert}]}>{id}</Text>
                <Text style={[FONTS.textHeader, {textAlign:'center', marginBottom: 15}]}>{name}</Text>

                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={{flex:1, alignItems:'flex-start', fontSize: SIZES.text16,}}>{username.toUpperCase()}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.label}>Teléfono:</Text>
                    <Text style={{flex:1, alignItems:'flex-start', fontSize: SIZES.text16,}}>{phone}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={{flex:1, alignItems:'flex-start', fontSize: SIZES.text16,}}>{email.toLowerCase()}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.label}>WEB:</Text>
                    <Text style={{flex:1, alignItems:'flex-start', fontSize: SIZES.text16,}}>{website}</Text>
                </View>
            </TouchableOpacity>

            <View style={{alignItems:'center'}}>
                <Text>{geolocation}</Text>
                <View style={styles.mapcontainer}>
                    <MapView 
                        style={styles.map}
                        loadingEnabled={true}
                        region={{
                            latitude: lat,
                            longitude: lng,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121
                        }}
                    >
                        <Marker 
                            coordinate={{ 
                                latitude : lat ,
                                longitude : lng 
                            }}
                            title={name}
                            description={email}
                        />
                    </MapView>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 15,
        width: SIZES.width - 50,
        height: 200,
        padding: 10,
        borderWidth: 0.75,
        borderRadius: SIZES.radius,
        borderColor: COLORS.colorSubTitle,
        borderBottomWidth: 7.5,
        backgroundColor: COLORS.colorBackgroundModal,
        marginBottom: 25,
        ...FONTS.shadowObj
    },
    label: {
        flex:0.25, 
        alignItems:'flex-end', 
        textAlign:'right', 
        paddingRight: 10,
        color: COLORS.colorLabelText,
    },
    mapcontainer: {
        width: SIZES.width - 50,
        height: 350,
        padding: 1,
        borderWidth: 0.75,
        borderColor: COLORS.colorSubTitle,
        backgroundColor: COLORS.colorBackgroundModal,
        marginBottom: 25,
        ...FONTS.shadowObj
    },
    map: {
        width: '100%',
        height: '100%',
    },
})

export default GeneralInformation;