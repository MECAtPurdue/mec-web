"use client";

import { useAuth } from "@/lib/firebase/useAuth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { CheckIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";

const AccountPage = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <>
        <h1 className="text-2xl">Account</h1>
        <p>You are not logged in. Please log in below.</p>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="text-2xl">Account</h1>
      <div className="flex flex-col sm:flex-row justify-between">
        <p>
          <span className="text-lg font-bold">Email: </span>
          {user.email}
        </p>
        {user.emailVerified && (
          <p className="flex items-center gap-1 italic">
            Verified
            <span>
              <CheckIcon className="scale-150" />
            </span>
          </p>
        )}
      </div>
      {!user.emailVerified && (
        <Link href="/verify">
          <Button className="w-full">
            <ExclamationTriangleIcon />
            Verify your email
          </Button>
        </Link>
      )}
      <Separator />
      <Button
        className="w-min bg-destructive text-destructive-foreground"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </>
  );
};

export default AccountPage;
