import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../styles/ResponsiveSize';
import colors from '../styles/Colors';
const CustomTextInput = ({
  inputStyle = {},
  textStyle = {},
  value = '',
  placeholder = '',
  onChangeText = {},
  secureText = false,
  onPressSecure = () => {},
  placeholderTextColor = colors.white,
  ...props // for extra props
}) => {
  return (
    <View style={{ ...styles.inputStyle, ...inputStyle }}>
      <TextInput
        style={styles.textStyle}
        {...props}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    backgroundColor: colors.gray,
    marginBottom: moderateScaleVertical(16),
    paddingHorizontal: scale(16),
  },
  textStyle: {
    fontSize: moderateScale(16),
  },
});
