import React, {FC, useState, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from '../components/input';
import {useAuth} from '../providers/auth';
import Button from '../components/button';
import {ScrollView} from 'react-native-gesture-handler';

interface IProps {}

const RegisterScreen: FC<IProps> = ({}) => {
  const {signUp} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const signUpHandler = () => {
    return signUp(email, password);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}>
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

        <TextInput placeholder={'Re-enter Password'} />
        <TextInput placeholder={'Contact Number'} />
        <View style={styles.buttonContainer}>
          <Button title={'Create Account'} onPress={signUpHandler} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    margin: 10,
  },
});

export default RegisterScreen;
