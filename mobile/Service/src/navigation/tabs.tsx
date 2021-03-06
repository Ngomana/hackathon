import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DispatchScreen from '../screen/tabs/dispatch';
import PostsScreen from '../screen/tabs/posts';
import AnnouncementsScreen from '../screen/tabs/announce';
import {StyleSheet, Platform, View, Text, Animated, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: '150%',
      duration: 3000,
    }).start();
  };
  return (
    <Tab.Navigator
      initialRouteName={'PostScreen'}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          ...Platform.select({
            ios: {
              bottom: 25,
              height: 90,
              left: 20,
              right: 20,
              borderRadius: 15,
              elevation: 0,
            },
            android: {
              bottom: 10,
              height: 65,
              borderRadius: 10,
              left: 10,
              right: 10,
            },
          }),
          //backgroundColor: '#ffffff',
          ...styles.shadow,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        component={DispatchScreen}
        name={'DispatchScreen'}
        options={{
          tabBarIcon: ({focused}) => (
            <Animated.View
              style={[
                styles.constrainer,
                {
                  width: focused ? '100%' : null,
                },
              ]}>
              <Image
                source={require('../images/icons8-construction-50.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              {focused ? <Text>Dispatch</Text> : null}
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        component={PostsScreen}
        name={'PostScreen'}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.constrainer,
                {
                  width: focused ? '150%' : '10%',
                },
              ]}>
              <Image
                source={require('../images/icons8-error-50.png')}
                style={{width: 20, height: 20}}
              />
              {focused ? <Text>Issues</Text> : null}
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={AnnouncementsScreen}
        name={'AnnouncementsScreen'}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.constrainer,
                {
                  width: focused ? '100%' : '10%',
                },
              ]}>
              <Image
                source={require('../images/icons8-speech-60.png')}
                style={{width: 20, height: 20}}
              />
              {focused ? <Text>Bulletin</Text> : null}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  constrainer: {
    ...Platform.select({
      ios: {top: 18, height: '80%'},
      android: {
        height: '70%',
      },
    }),
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  focusedWite: {
    color: 'white',
  },
  focusedGrey: {color: 'grey'},
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.125,
    shadowRadius: 3.5,
    elevation: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Tabs;
