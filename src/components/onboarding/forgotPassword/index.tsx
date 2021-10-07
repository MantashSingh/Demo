import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';

const array = ['Ram', 'Shyam', 'Mohan'];

const ForgotPassword = () => {
  const {navigate} = useNavigation();
  const onGoToLogin = () => {
    navigate('Login');
  };
  const [firstName, thirdName, secondName, seventhName] = array;
  return (
    <View style={styles.container}>
      <Text>Forgot Password {typeof seventhName}</Text>
      <Pressable onPress={onGoToLogin}>
        <Text style={styles.textStyle}>Go to login</Text>
      </Pressable>
    </View>
  );
};

export default ForgotPassword;
