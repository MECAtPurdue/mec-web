import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase/firebase-client";
import {
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getUser } from "@/lib/firebase/useFirestore";
import type { User } from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (!user) {
        setIsAdmin(false);
        return;
      }

      (async () => {
        const [userData, error] = await getUser(user.uid);

        if (error || !userData || userData.role !== "admin") {
          setIsAdmin(false);
          return;
        }

        setIsAdmin(true);
      })();
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
    isAdmin,
  };
};
