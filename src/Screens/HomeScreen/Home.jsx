import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import strings from '../../Constants/Lang/index';
const Home = () => {
  return (
    <View>
      <Text style={{ fontFamily: 'Lato-Bold' }}>{strings.HOME}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
