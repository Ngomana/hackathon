import React, {FC} from 'react';
import {TextInput as TextBox, StyleSheet, Platform} from 'react-native';

interface IProps {
  placeholder: string;
  onChange: any;
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
    ...Platform.select({
      ios: {margin: 15},
      android: {
        marginLeft: 15,
        marginRight: 15,
      },
    }),
  },
});

export default TextInput;
