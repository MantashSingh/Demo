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

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:100
  },
});