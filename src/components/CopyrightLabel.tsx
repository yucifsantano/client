import React from 'react';
import { Text } from 'react-native';
import { FONTS } from '../../constants'

const CopyrightLabel = () => {
    return (
        <>
            <Text style={FONTS.textCopyright}>CIERICORP TECHNOLOGY</Text>
            <Text style={FONTS.textCopyright}>Copyright 2022 V 22.02.16.09.56</Text>
        </>
    )
}

export default CopyrightLabel;