import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../Redux/reducer/auth';
import WrapperContainer from '../../Components/WrapperContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const InitialScreen = () => {
  const dispatch = useDispatch();
  // const onLogin = () => {
  //   dispatch(saveUserData({ isLogin: true }));
  // };
  return (
    <WrapperContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ color: 'white' }}>Yash Salave</Text>
      </SafeAreaView>
    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
