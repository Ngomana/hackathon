import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from '../components/input.tsx';

interface IProps {}

const LandingScreen: FC<IProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={'E-mail'} />
      <TextInput placeholder={'Password'} />
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

export default LandingScreen;
