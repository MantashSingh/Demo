import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';
import WrapperContainer from '../../common/WrapperContainer';
import CommonButton from '../../common/CommonButton';
import Header from '../../common/Header';
import BorderTextInput from '../../common/BorderTextInput';
import {styles} from './styles';
import DatePickerWithLabel from '../../common/DatePickerWithLabel';

export default function Register({navigation}) {
  const [showPass, setshowPass] = useState(true);

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCOnfirmPassword, setshowCOnfirmPassword] = useState(true);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  return (
    <WrapperContainer statusBarColor={colors.themeColor}>
      <View style={styles.container}>
        <Header
            leftIcon={require("../../../images/ic_back.png")}
          onPressLeft={() => {
            navigation.goBack();
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', marginLeft: moderateScale(110)}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={styles.newHere}>Have an account?</Text>
            <Text style={styles.register}>Login</Text>
          </TouchableOpacity>
        </Header>
        <ScrollView style={styles.whiteView}>
          <View style={styles.sidePadding}>
            <Text style={styles.signInAs}>Let’s create your </Text>
            <Text style={styles.admin}>account.</Text>

            <Text style={styles.notAnAdmin}>
              Get started by creating your account
            </Text>
            <BorderTextInput
              placeholder={'Name'}
              onChangeText={value => setname(value)}
            />
            <BorderTextInput
              placeholder={'Email'}
              onChangeText={value => setEmail(value)}
            />

            <BorderTextInput
              placeholder={'Password'}
              rightIcon={true}
              secureTextEntry={password.length < 1 ? false : showPass}
              onPressRight={() => setshowPass(!showPass)}
              onChangeText={value => setpassword(value)}
            />

            <BorderTextInput
              placeholder={'Confirm Password'}
              rightIcon={true}
              secureTextEntry={
                password.length < 1 ? false : showCOnfirmPassword
              }
              onPressRight={() => setshowCOnfirmPassword(!showCOnfirmPassword)}
              onChangeText={value => setConfirmPassword(value)}
            />

            <DatePickerWithLabel
              placeHolder={'SELECT DATE'}
              mode="date"
              value={date}
              onDateChange={date => setDate(date)}
            />
            <DatePickerWithLabel
              placeHolder={'SELECT TIME'}
              mode="time"
              value={time}
              onDateChange={time => setTime(time)}
            />

            <Text style={styles.minPassword}>
              Password should be minimum 8 characters
            </Text>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                marginTop: moderateScaleVertical(16),
              }}>
              <Text style={styles.minPassword}>
                By tap on next you are agree with our{' '}
              </Text>
              <Text style={{...styles.minPassword, color: colors.blue}}>
                Terms and Conditions
              </Text>

              <Text style={styles.minPassword}> and </Text>
              <Text style={{...styles.minPassword, color: colors.blue}}>
                Privacy policy.
              </Text>
            </View>

            <View style={styles.buttonLogin}>
              <CommonButton
                string={'Register'}
                buttonColor={colors.black}
                onPress={()=>navigation.navigate("Dashboard")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </WrapperContainer>
  );
}
