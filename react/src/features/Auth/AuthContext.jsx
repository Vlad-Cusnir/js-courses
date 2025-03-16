import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const initialAuth = {
  accessToken: null,
  user: null,
};

const storageKey = 'auth';

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(() => {
    const fromStorage = localStorage.getItem(storageKey);
    if(fromStorage) {
      return JSON.parse(fromStorage);
    }
    return initialAuth;
  });

  function login(data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
    setAuth(data);
  }

  function logout() {
    localStorage.removeItem(storageKey);
    setAuth(initialAuth);
  }

  return (
    <AuthContext.Provider value={{ login, logout, ...auth}}>{children}</AuthContext.Provider>
  )
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if(ctx === null) {
    throw new Error('useAuthContext() should only be used in a child of <AuthContextProvider>!');
  }

  return ctx;
}
