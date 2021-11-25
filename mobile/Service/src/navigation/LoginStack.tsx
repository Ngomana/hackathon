import React, {FC} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PasswordResetScreen from '../screen/passwordResetPage';
import RegisterScreen from '../screen/registerPage';
import LandingScreen from '../screen/landingPage';
import {useAuth} from '../providers/auth';

interface IProps {}
const Stack = createNativeStackNavigator();

const LandingPage: FC<IProps> = ({}) => {
  const {user} = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={LandingScreen}
        name={'AuthScreen'}
        options={{
          headerShown: false,
          title: 'Login',
        }}
      />
      <Stack.Screen
        component={RegisterScreen}
        name={'RegisterScreen'}
        options={{
          title: 'New Account',
        }}
      />
      <Stack.Screen
        component={PasswordResetScreen}
        name={'PasswordResetScreen'}
        options={{
          title: 'Password Reset',
        }}
      />
    </Stack.Navigator>
  );
};

export default LandingPage;
