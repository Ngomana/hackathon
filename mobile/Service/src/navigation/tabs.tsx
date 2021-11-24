import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DispatchScreen from '../screen/tabs/dispatch';
import PostsScreen from '../screen/tabs/posts';
import AnnouncementsScreen from '../screen/tabs/announce';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={'PostScreen'}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          height: 60,
          ...styles.shadow,
        },
        headerShown: false,
      }}>
      <Tab.Screen component={DispatchScreen} name={'DispatchScreen'} />
      <Tab.Screen component={PostsScreen} name={'PostScreen'} />
      <Tab.Screen
        component={AnnouncementsScreen}
        name={'AnnouncementsScreen'}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#75G5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
