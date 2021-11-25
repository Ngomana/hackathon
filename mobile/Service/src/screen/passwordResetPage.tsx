import React, {FC, useState, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from '../components/input';
import Button from '../components/button';

interface IProps {}

const PasswordResetScreen: FC<IProps> = ({}) => {
  const [email, setEmail] = useState('');

  const emailOnChange = (e: {nativeEvent: {text: SetStateAction<string>}}) => {
    const value = e.nativeEvent.text;

    setEmail(value);
  };

  const resetEvent = () => {
    console.log(email);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChange={emailOnChange}
        placeholder={'E-mail'}
      />
      <Button title={'Reset'} onPress={resetEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default PasswordResetScreen;
