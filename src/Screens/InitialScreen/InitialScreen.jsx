import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import WrapperContainer from '../../Components/WrapperContainer';
import FontFamily from '../../styles/FontFamily';
import ImagePath from '../../Constants/ImagePath';
import strings from '../../Constants/Lang';
import Colors from '../../styles/Colors';
import CustomButton from '../../Components/CustomButton';
import {
  moderateScale,
  moderateScaleVertical,
  verticalScale,
} from '../../styles/ResponsiveSize';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../Navigations/NavigationString';
const InitialScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const onLogin = () => {
  //   dispatch(saveUserData({ isLogin: true }));
  // };
  const onPress = () => {
    Alert.alert('Terms');
  };
  return (
    <WrapperContainer style={{ padding: moderateScale(10), flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image source={ImagePath.appLogo} style={styles.logo} />
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            ...styles.textStyles,
            marginVertical: moderateScaleVertical(40),
          }}
        >
          {strings.BY_CLICKING_LOG_IN}
          <Text onPress={onPress} style={styles.textStyles}>
            {strings.TERMS}
          </Text>
          <Text style={styles.textStyles}>{strings.LEARN_HOW_WE_PROCESS}</Text>
          <Text onPress={onPress} style={styles.textStyles}>
            {strings.PRIVACY_POLICY}
          </Text>
        </Text>
        <CustomButton
          text={strings.LOG_IN_WITH_PHONE_NUMBER}
          onPress={() => navigation.navigate(NavigationString.LOGIN)}
        />
        <Text
          style={{
            ...styles.textStyles,
            marginVertical: moderateScaleVertical(16),
          }}
        >
          {strings.OR}
        </Text>
        <CustomButton
          text={strings.LOG_IN_WITH_GOOGLE}
          style={{ backgroundColor: Colors.white }}
          textStyle={{ color: Colors.black }}
          leftIcon={ImagePath.google}
        />
        <CustomButton
          text={strings.LOG_IN_WITH_FACEBOOK}
          style={{
            marginVertical: moderateScaleVertical(16),
            backgroundColor: Colors.white,
          }}
          textStyle={{ color: Colors.black }}
          leftIcon={ImagePath.facebook}
        />
        <CustomButton
          text={strings.LOG_IN_WITH_APPLE}
          style={{ backgroundColor: Colors.white }}
          textStyle={{ color: Colors.black }}
          leftIcon={ImagePath.apple}
        />
        <Text
          style={{
            ...styles.textStyles,
            fontFamily: FontFamily.medium,
            marginVertical: moderateScaleVertical(16),
          }}
        >
          {strings.NEW_HERE}
          <Text
            style={{
              ...styles.textStyles,
              color: Colors.blue,
              fontFamily: FontFamily.bold,
            }}
          >
            {strings.SIGN_UP}
          </Text>
        </Text>
      </View>
    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  logo: {
    height: verticalScale(150),
    width: moderateScale(150),
    borderRadius: moderateScale(150 / 2),
  },
  textStyles: {
    fontFamily: FontFamily.regular,
    color: Colors.white,
    fontSize: moderateScale(11),
    textAlign: 'center',
  },
  logoContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  subContainer: {
    padding: moderateScale(16),
    flex: 0.7,
    // backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },
});
