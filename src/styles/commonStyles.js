import {StyleSheet} from 'react-native';

import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';
export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  fontSize12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSemiBold14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },

  fontSemiBold28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },

  fontSize15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSizeMedium12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.medium,
    textAlign: 'left',
  },
  fontSizeMedium14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.medium,
    textAlign: 'left',
  },
  fontSizeMedium16: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.medium,
    textAlign: 'left',
  },
  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize20: {
    fontSize: textScale(20),
    color: colors.lightDarkBlack,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontBold15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontBold32: {
    fontSize: textScale(32),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontBold28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.bold,
    textAlign: 'left',
  },
  fontSize26: {
    fontSize: textScale(26),
    color: colors.numberBlackblack,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize28: {
    fontSize: textScale(28),
    color: colors.numberBlackblack,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },
  fontSize13Purple: {
    fontSize: textScale(13),
    color: colors.purpleColor,
    fontFamily: fontFamily.regular,
    textAlign: 'left',
  },

  fontSize16SemiBold: {
    fontSize: textScale(16),
    color: colors.black2Color,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },
  fontSize18SemiBold: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },
  fontSize20SemiBold: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },
  fontSize32SemiBold: {
    fontSize: textScale(32),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },
  fontSize30SemiBold: {
    fontSize: textScale(30),
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'left',
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRect: {
    height: moderateScaleVertical(46),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeColor,
    borderWidth: 1,
    borderColor: colors.themeColor,
    borderRadius: 4,
  },
  shadowStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 8,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },
  buttonTextWhite: {
    fontFamily: fontFamily.futuraBtHeavy,
    textTransform: 'uppercase',
    color: colors.white,
    textAlign: 'center',
  },
  imgOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});
