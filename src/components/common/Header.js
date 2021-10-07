import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../../styles/responsiveSize';
export default function Header({
  children,
  heading = '',
  headingStyle = "",
  onPressHeading=() => {},
  rightIcon1 = '',
  onPress1 = () => {},
  rightIcon2 = '',
  onPress2 = () => {},
  rightIcon3 = '',
  onPress3 = () => {},
  leftIcon = '',
  onPressLeft = () => {},
}) {

 
  return (
    <View style={styles.sidePadding}>
      <View
        style={{flexDirection: 'row', marginBottom: moderateScaleVertical(16)}}>
        <TouchableOpacity onPress={onPressLeft}>
          <Image source={leftIcon} style={styles.menu} />
        </TouchableOpacity>
        <Text style={{...styles.discover,...headingStyle}}>{heading}</Text>
        {children}
        <View style={{marginLeft: 'auto'}}></View>
        {rightIcon3 !== '' && (
          <TouchableOpacity
            style={{...styles.menu, marginLeft: 'auto'}}
            onPress={onPress3}>
            <Image source={rightIcon3} />
          </TouchableOpacity>
        )}

        {rightIcon2 !== '' && (
          <TouchableOpacity style={{...styles.menu}} onPress={onPress2}>
            <Image source={rightIcon2} />
          </TouchableOpacity>
        )}

        {rightIcon1 !== '' && (
          <TouchableOpacity onPress={onPress1}>
            <Image source={rightIcon1} style={{...styles.menu , marginRight:0}} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidePadding: {
    paddingLeft: moderateScale(24),
    paddingRight: moderateScale(23),
    marginTop:moderateScaleVertical(16)
  },
  menu: {
    width: moderateScale(24),
    height: moderateScaleVertical(24),
    marginRight: moderateScale(16),
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  discover: {
    ...commonStyles.fontSize18SemiBold,
    marginBottom: 'auto',
    marginTop: 'auto',
    
  },
});
