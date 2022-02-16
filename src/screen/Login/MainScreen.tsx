import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../../../constants/theme';
import { StatusBar } from 'expo-status-bar'

//Screens
import HomeScreen from '../Main/HomeScreen';
import WalletScreen from '../Main/WalletScreen';
import QRcodeScreen from '../Main/QRcodeScreen';
import PricetagScreen from '../Main/PricetagScreen';
import SettingScreen from '../Main/SettingsScreen';

// Screen name
const homeName = 'Inicio';
const walletName = 'Cartera';
const qrcodeName = 'QR code';
const pricetagName = 'Cupones';
const settingsName = 'Ajustes';

const Tab = createBottomTabNavigator();


export default function MainContainer() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? 'home':'home-outline'
                    } else if (rn === walletName) {
                        iconName = focused ? 'wallet':'wallet-outline'
                    } else if (rn === qrcodeName) {
                        iconName = focused ? 'qr-code':'qr-code-outline'
                    } else if (rn === pricetagName) {
                        iconName = focused ? 'pricetags':'pricetags-outline'
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings':'settings-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={COLORS.colorTitleApp} />
                },
            })}
        >
            <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false, tabBarActiveTintColor: COLORS.colorTitleApp }} />
            <Tab.Screen name={walletName} component={WalletScreen}options={{ headerShown: false, tabBarActiveTintColor: COLORS.colorTitleApp }} />
            <Tab.Screen name={qrcodeName} component={QRcodeScreen}options={{ headerShown: false, tabBarActiveTintColor: COLORS.colorTitleApp }} />
            <Tab.Screen name={pricetagName} component={PricetagScreen}options={{ headerShown: false, tabBarActiveTintColor: COLORS.colorTitleApp,  tabBarBadge: 3 }} />
            <Tab.Screen name={settingsName} component={SettingScreen}options={{ headerShown: false, tabBarActiveTintColor: COLORS.colorTitleApp }} />
        </Tab.Navigator>
    )
}