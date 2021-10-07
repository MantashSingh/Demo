import React, {useEffect} from 'react';
import {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../../styles/colors';
import commonStyles, {hitSlopProp} from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';


export default function BorderTextInput({
  leftIcon,
  color = colors.textGreyOpcaity7,
  rightIcon,
  rightImage,
  onChangeText,
  value,
  placeholder,
  marginBottom = 20,
  onPressRight = () => {},
  withRef = false,
  secureTextEntry = false,
  styles = {},
  textinputStyles,
  ...props
}) {
  const inputRef = useRef();

  // useEffect(() => {
  //   if (withRef && Platform.OS === 'android') {
  //     if (inputRef.current) {
  //       inputRef.current.setNativeProps({
  //         style: {fontFamily: fontFamily.regular},
  //       });
  //     }
  //   }
  // }, [secureTextEntry]);
  return (
    <View
      style={{
        flexDirection: 'row',
        color: colors.white,
        borderRadius: 16,
        height: moderateScaleVertical(56),
        fontFamily: fontFamily.regular,
        backgroundColor: colors.whiteF2,
        marginBottom,
        ...styles,
      }}>
      {leftIcon && (
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <Image source={leftIcon} />
        </View>
      )}
      <TextInput
        // selectionColor={colors.blackOpacity60}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={color}
        style={{
          flex: 1,
          opacity: 0.7,
          color: colors.black,
          fontFamily: fontFamily.regular,
          fontSize: textScale(16),
          paddingHorizontal: 10,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: colors.whiteF2,
          borderRadius: 16,
          ...textinputStyles
        }}
        ref={inputRef}
        blurOnSubmit
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      {rightIcon && (
        <TouchableOpacity
          style={{justifyContent: 'center', marginRight: 10}}
          hitSlop={hitSlopProp}
          onPress={onPressRight}>
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: textScale(15),
              color: colors.textGreyOpcaity7,
              marginRight: 5,
            }}>
            Show
          </Text>
        </TouchableOpacity>
      )}

      {rightImage && (
        <TouchableOpacity
          style={{justifyContent: 'center', marginRight: 14,}}
          hitSlop={hitSlopProp}
          onPress={onPressRight}>
          <Image source={rightImage} style={{marginRight: moderateScale(8) , width:20 , height:20}} />
        </TouchableOpacity>
      )}
    </View>
  );
}
