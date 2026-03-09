import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../styles/Colors';
const WraperContainer = ({ style = {}, children }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <>{children}</>
    </View>
  );
};

export default WraperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkMode,
  },
});
