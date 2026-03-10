import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import WraperContainer from '../../Components/WrapperContainer';
import { moderateScale } from '../../styles/ResponsiveSize';
import strings from '../../Constants/Lang';
import CustomTextInput from '../../Components/CustomTextInput';
const Login = () => {
  const dispatch = useDispatch();
  return (
    <WraperContainer>
      <View style={{ flex: 1, padding: moderateScale(16) }}>
        <Text style={{ color: 'white' }}>{strings.WELCOME_BACK}</Text>
        <Text>{strings.WE_ARE_HAPPY_TO_SEE_YOUCANLOGIN_TO_CONTINUE}</Text>
        <CustomTextInput placeholder={strings.EMAIL} />
        <CustomTextInput placeholder={strings.PASSWORD} />
      </View>
    </WraperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
