import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/state/store';
import IndexScreen from './Main';
import Realm from 'realm';
import {getRealmApp} from './src/realm/configRealm';

const app = new Realm.App({
  id: 'servicsync-ysvqr',
  timeout: 15000,
});

let realm;
const App = () => {
  return (
    <Provider store={store}>
      <IndexScreen />
    </Provider>
  );
};

export default App;
