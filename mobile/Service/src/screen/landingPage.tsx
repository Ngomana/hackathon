import React, {FC, SetStateAction, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TextInput from '../components/input';
import Button from '../components/button';
import {useAuth} from '../providers/auth';

interface IProps {}

const LandingScreen: FC<IProps> = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useAuth();
  const emailOnChange = (e: {nativeEvent: {text: SetStateAction<string>}}) => {
    const value = e.nativeEvent.text;

    setEmail(value);
  };

  const passwordOnChange = (e: {
    nativeEvent: {text: SetStateAction<string>};
  }) => {
    const value = e.nativeEvent.text;

    setPassword(value);
  };
  const passwordResetHandler = () => {
    navigation.navigate('PasswordResetScreen');
  };

  const signUpHandler = () => {
    navigation.navigate('RegisterScreen');
  };

  const signInHandler = () => {
    return signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChange={emailOnChange}
        placeholder={'E-mail'}
      />
      <TextInput
        value={password}
        onChange={passwordOnChange}
        placeholder={'Password'}
      />

      <View style={styles.buttonContainer}>
        <Button title={'Sign in'} onPress={signInHandler} />
        <Button title={'Sign up'} onPress={signUpHandler} />
      </View>
      <Text onPress={passwordResetHandler} style={styles.passwordText}>
        Forgot Password?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  passwordText: {
    color: 'blue',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default LandingScreen;
