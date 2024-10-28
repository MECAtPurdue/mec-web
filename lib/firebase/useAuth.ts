import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase/firebase-client";
import {
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const sOut = async () => await signOut(auth);

  const sendVerification = async () =>
    user &&
    (await sendEmailVerification(user, {
      url: `${process.env.NEXT_PUBLIC_URL}/verify`,
    }));

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  return {
    user,
    signOut: sOut,
    sendVerification,
    signIn,
  };
};
