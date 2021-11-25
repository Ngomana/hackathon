import 'react-native-gesture-handler';
import React from 'react';
import IndexScreen from './Main';
import {AuthProvider} from './src/providers/auth';
const App = () => {
  return (
    <AuthProvider>
      <IndexScreen />
    </AuthProvider>
  );
};

export default App;
