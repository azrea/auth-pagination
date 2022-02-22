import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    displayName: "",
    user: {},
  });

  const navigate = useNavigate();

  async function signup(email, password) {
    try {
      const cUser = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser({ ...currentUser, user: cUser });
    } catch (error) {
      console.log(error);
    }
  }

  async function login(email, password) {
    try {
      const cUser = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser({ ...currentUser, user: cUser });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log("Logged In");
        setLoading(false);
      } else {
        console.log("No user");
      }
    });
    return unsubscribe;
  });

  return (
    <AuthContext.Provider
      value={{
        loading,
        signup,
        setCurrentUser,
        currentUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
