import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    colorBackground: '#ffe2b5',
    colorTitleApp: "#ea9000",
    colorSubTitle: "#ff9900",
    colorLabelText: "#777777",
    colorText: "#494949",
    colorIcon: "#bc7100",
    
    colorInputText: "#000",
    colorInputbackground: '#ffdca5',
    colorInputBorder: "#ea9000",
    colorInputPlaceholder: "#ea9000",

    colorAlert: '#ff7777',
    colorShadow: 'rgba(0, 0, 0, 0.20)',

    colorDegradadoBeginning: '#ff9900',
    colorDegradadoIntermediate: '#ef8f00',
    colorDegradadoFinal: '#d88500',

};
export const SIZES = {
    //global sizes
    radius: 12,
    padding: 24,

    //font sizes
    h0: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    text8: 8,
    text9: 9,
    text10: 10,
    text12: 12,
    text14: 14,
    text16: 16,
    text20: 20,
    text22: 22,
    text30: 30,
    text31: 31,

    // app dimensions
    width,
    height

};

export const FONTS = {
    label30: { 
        fontFamily: "Shalimar", 
        fontSize: SIZES.text30, 
        lineHeight: 36, 
        color: COLORS.colorLabelText
    },
    input30: { 
        fontFamily: "PoiretOne", 
        fontSize: SIZES.text20, 
        color: COLORS.colorText, 
        backgroundColor: COLORS.colorInputbackground, 
        borderColor:COLORS.colorInputBorder 
    },
    headerapp: {
        fontFamily: "Staatliches", 
        fontSize: 80,
        color: COLORS.colorTitleApp, 
        textShadowColor: COLORS.colorShadow, 

    },
    subtitle: {
        fontFamily: "Shalimar", 
        fontSize: 50,
        color: COLORS.colorSubTitle,
    },
    textDefault: {
        fontFamily: "Shalimar", 
        fontSize: SIZES.text31,
        color: COLORS.colorText,
    },
    textHeader: {
        fontFamily: "Staatliches", 
        fontSize: SIZES.text20,
        color: COLORS.colorSubTitle,
    },
    textInpunt: {
        fontFamily: "PoiretOne", 
        fontSize: SIZES.text20, 
        color: COLORS.colorInputText, 
        backgroundColor: COLORS.colorInputbackground, 
        borderColor:COLORS.colorInputBorder 
    },
    textButton: {
        fontFamily: "Staatliches",
        fontSize: SIZES.text20,
        color: COLORS.colorInputText,
    },
    textInstructions: {
        fontFamily: "Staatliches",
        fontSize: SIZES.text20,
        color: COLORS.colorTitleApp,
    },
    textCopyright: {
        fontFamily: "PoiretOne", 
        fontSize: SIZES.text10,
        color: COLORS.colorText,
    }
};


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
