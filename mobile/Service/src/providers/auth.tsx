import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from 'react';
import {getRealmApp} from '../realm/configRealm';
import {Provider} from 'react-redux';
import store from '../state/store';
import {NavigationContainer} from '@react-navigation/native';
import Realm from 'realm';

const app = getRealmApp();

const AuthContext = createContext(null);

const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState(app.currentUser);
  const realmRef: any = useRef(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    return () => {
      const userRealm = realmRef.current;
      if (userRealm) {
        userRealm.close();
        realmRef.current = null;
      }
    };
  }, [user]);

  const signIn = async (email: string, password: string) => {
    const credentials = Realm.Credentials.emailPassword(email, password);
    const newUser = await app.logIn(credentials);
    setUser(newUser);
    console.log('Logged in successfully');
  };

  const signUp = async (email: string, password: string) => {
    try {
      await app.emailPasswordAuth.registerUser(email!, password!);
    } catch (err) {
      console.log(`Failed to create account, error code: ${err[0]}`);
    }
  };

  const signOut = () => {
    if (user === null) {
      console.warn("Not logged in, can't log out!");
      return;
    }
    user.logOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        user,
      }}>
      <Provider store={store}>
        <NavigationContainer>{children}</NavigationContainer>
      </Provider>
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth == null) {
    throw new Error('useAuth() called outside of a AuthProvider?');
  }
  return auth;
};

export {AuthProvider, useAuth};
