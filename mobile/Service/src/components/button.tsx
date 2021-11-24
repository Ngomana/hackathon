import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface IProps {
  title: string;
  onPress: () => void;
}

const Button: FC<IProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity s onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Button;
