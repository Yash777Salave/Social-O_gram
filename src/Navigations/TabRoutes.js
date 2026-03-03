import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import navigationStrings from './NavigationString';
import { CreatePost, Home, Notification, Profile, Search } from '../Screens';
import ImagePath from '../Constants/ImagePath';
import colors from '../styles/Colors';
const BottomTab = createBottomTabNavigator();

const TabRoutes = props => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: 'gray',
        // tabBarShowLabel: false
        // tabBarStyle: { backgroundColor: 'gray' },
      }}
    >
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.firstActiveIcon} />
            ) : (
              <Image source={ImagePath.firstInActiveIcon} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.secondActiveIcon} />
            ) : (
              <Image source={ImagePath.secondInActiveIcon} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CREATE_POST}
        component={CreatePost}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.thirdActiveIcon} />
            ) : (
              <Image source={ImagePath.thirdInActiveIcon} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.fourthActiveIcon} />
            ) : (
              <Image source={ImagePath.fourthInActiveIcon} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.PRFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.fifthActiveIcon} />
            ) : (
              <Image source={ImagePath.fifthInActiveIcon} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    //height: moderateScale(60)
  },
});

export default TabRoutes;
