import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 813;
const scale = (size) => width / guidelineBaseWidth * size;
const verticalScale = (size) => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

// export const Fonts = {
//     Bold: 'DMSans_18pt-Bold',
//     SemiBold: 'PDMSans_18pt-SemiBold',
//     Medium: 'DMSans_18pt-Medium',
//     Regular: 'DMSans_18pt-Regular'
// }

// export const Colors = {
//     WHITE: '#FFFFFF',
//     BLACK: '#06090F',
//     PRIMARY_BLUE: '#723CEB',
//     PRIMARY_COLOR: '#BF49B0',
//     SECONDARY_COLOR: '#FF902F'
// }

export const DEVICE_STYLES = {
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
}

export const DEVICE_STYLES_WITH_STATUSBAR = Dimensions.get('screen');