import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    colorTitleApp: "#ea9000",


    primary: "#7F5DF0",     // Light purple
    secondary: "#5D2DFD",   // Dark purple

    white: "#fff",
    black: "#000000",
    green: "#37E39F",
    red: "#F9A8BA",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa"
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height

};

export const FONTS = {
    headerapp: { fontFamily: "PoiretOne-Regular", fontSize: 80, lineHeight: 136, color: COLORS.colorTitleApp, fontWeight:'bold', textShadowColor: 'rgba(0, 0, 0, 0.20)', textShadowOffset: {width: 0, height: 1}, textShadowRadius: 10 },
    h1: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "PoiretOne-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
