import {getRealmApp} from '../realm/configRealm';
import {createContext, useState, useRef, useEffect} from 'react';

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
    await app.emailPasswordAuth.registerUser(email, password);
  };
};
