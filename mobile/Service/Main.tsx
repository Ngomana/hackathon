import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './src/navigation/stack';

const IndexScreen: FC = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default IndexScreen;
