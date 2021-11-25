import React, {FC} from 'react';
import Stacks from './src/navigation/stack';
import {useAuth} from './src/providers/auth';
import LandingPage from './src/navigation/LoginStack';

const IndexScreen: FC = () => {
  const {user} = useAuth();
  return <>{!user ? <LandingPage /> : <Stacks />}</>;
};

export default IndexScreen;
