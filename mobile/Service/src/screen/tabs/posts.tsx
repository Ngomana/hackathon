import React, {FC} from 'react';
import {Text, View} from 'react-native';
import TextInput from '../../components/input';

const PostsScreen: FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Text>Current Issues</Text>
    </View>
  );
};

export default PostsScreen;
