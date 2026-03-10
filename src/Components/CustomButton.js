import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontFamily from '../styles/FontFamily';
import Colors from '../styles/Colors';
import { moderateScale, scale, verticalScale } from '../styles/ResponsiveSize';

const CustomButton = ({
  onPress = () => {},
  style = {},
  text = '',
  leftIcon = null,
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ ...styles.buttonContainer, ...style }}
    >
      {!!leftIcon ? (
        <Image source={leftIcon} style={styles.icons} />
      ) : (
        <View></View>
      )}
      <Text style={{ ...styles.buttonText, ...textStyle }}>{text}</Text>
      <View></View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: FontFamily.regular,
    color: Colors.white,
  },
  buttonContainer: {
    height: verticalScale(52),
    backgroundColor: Colors.red,
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(16),
  },
  icons: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
});
