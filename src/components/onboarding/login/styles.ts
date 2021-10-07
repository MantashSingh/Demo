import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import commonStyles from '../../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },

  sidePadding: {
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(23),
    flex:1
  },
  back: {
    width: moderateScale(24),
    height: moderateScaleVertical(24),
    marginBottom: moderateScaleVertical(16),
  },
  whiteView: {
    flex:1,

    backgroundColor: colors.white,
    // height: "95%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  signInAs: {
    ...commonStyles.fontSemiBold28,
    marginTop: moderateScaleVertical(24),
  },
  admin: {
    ...commonStyles.fontSize28,
    bottom:10
  },
  notAnAdmin: {
    ...commonStyles.fontSize16,
    // color: getColorCodeWithOpactiyNumber('000000', '50'),
    marginBottom: moderateScaleVertical(14),
    bottom:10
  },
  forgotPassword: {
    ...commonStyles.fontSizeMedium12,
    color: colors.blue,
    // textAlign: 'right',
    marginLeft:"auto"
    
  },
  buttonLogin:{
      marginTop:moderateScaleVertical(200),
      marginBottom:moderateScaleVertical(24)
  },
  line: {
    height: 1,
    // backgroundColor: getColorCodeWithOpactiyNumber('000000', '10'),
    marginTop: moderateScaleVertical(24),
  },
  adminArea: {
    ...commonStyles.fontSizeMedium16,
    color: colors.blue,
    marginTop: moderateScaleVertical(24),
    marginRight: 'auto',
  },
  ic_view_detail: {
    marginTop: moderateScaleVertical(24),
  },
  newHere:{
    ...commonStyles.fontSizeMedium16,
    marginLeft:"auto",
    marginTop:"auto",
    marginBottom:"auto"
  },
  register:{
    ...commonStyles.fontBold16,
    color:colors.red
  }
});