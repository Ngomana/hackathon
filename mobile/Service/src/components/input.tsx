import React, {FC} from 'react';
import {TextInput as TextBox, StyleSheet} from 'react-native';

interface IProps {
  placeholder: string;
  onChange: () => void;
  value: string;
}

const TextInput: FC<IProps> = ({placeholder, onChange, value}) => {
  return (
    <TextBox
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    shadowColor: 'white',
    textAlign: 'center',
  },
});

export default TextInput;
