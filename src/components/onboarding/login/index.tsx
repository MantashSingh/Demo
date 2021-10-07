import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View , TouchableOpacity} from 'react-native';
import Header from "../../common/Header";
import BorderTextInput from "../../common/BorderTextInput";
import {PhotoResponse} from '../../../services/models/photo';
import {styles} from './styles';
import { moderateScale, moderateScaleVertical } from '../../../styles/responsiveSize';
import colors from '../../../styles/colors';
import WrapperContainer from '../../common/WrapperContainer';
import CommonButton from '../../common/CommonButton';
const Login = ({navigation}) => {
  const [showPass, setshowPass] = useState(true);
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');


  return (
    <WrapperContainer statusBarColor={colors.themeColor}>
    <View style={styles.container}>
      <Header>
        <TouchableOpacity
          style={{flexDirection: 'row', marginLeft: moderateScale(145)}}
          onPress={() => {
            navigation.navigate("Register");
          }}>
          <Text style={styles.newHere}>New Here ? </Text>

          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </Header>
      <View style={styles.whiteView}>
        <View style={styles.sidePadding}>
          <Text style={styles.signInAs}>Let’s sign you in.</Text>
          <Text style={styles.admin}>Welcome back.</Text>

          <Text style={styles.notAnAdmin}>Login to continue.</Text>

          <BorderTextInput
            placeholder={"Email"}
            onChangeText={value => setEmail(value)}
          />

          <BorderTextInput
            placeholder={"Password"}
            rightIcon={true}
            secureTextEntry={password.length < 1 ? false : showPass}
            onPressRight={() => setshowPass(!showPass)}
            onChangeText={value => setpassword(value)}
          />

          <Text
            style={styles.forgotPassword}
            onPress={() => {
              navigation.navigate(navigationStrings.FORGOTPASSWORD);
            }}>
            Forgot Password
          </Text>

          <View style={styles.buttonLogin}>
            <CommonButton
              string={"Login"}
              buttonColor={colors.black}
              
            />
          </View>
        </View>

    
      </View>
    </View>
  </WrapperContainer>
  );
};

export default Login;
