import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../../Redux/reducer/auth';

const InitialScreen = () => {
  const dispatch = useDispatch();
  const onLogin = () => {
    dispatch(saveUserData({ isLogin: true }));
  };
  return (
    <View>
      <Text>InitialScreen</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
