"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/firebase/useAuth";
import useBannerStore from "@/lib/store/useBannerStore";

const VerifyPage = () => {
  const { user, sendVerification } = useAuth();
  const { setBanner } = useBannerStore();

  if (!user) {
    return (
      <>
        <h1 className="text-2xl">Verify</h1>
        <p>Login to verify your account</p>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </>
    );
  }

  if (user.emailVerified) {
    return (
      <>
        <h1 className="text-2xl">Verify</h1>
        <p>You have successfully verified!</p>
      </>
    );
  }

  const onClick = async () => {
    try {
      await sendVerification();
      setBanner(
        "Email has been sent! Click the link in your email to verify.",
        "Success"
      );
    } catch (e) {
      setBanner(JSON.stringify(e), "Error");
    }
  };

  return (
    <>
      <h1 className="text-2xl">Verify</h1>
      <p>Please verify your email to use with this app.</p>
      <Button onClick={() => onClick()}>Send Verification Link</Button>
    </>
  );
};

export default VerifyPage;
