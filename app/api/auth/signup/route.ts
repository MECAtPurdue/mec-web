import { auth } from "@/lib/firebase/firebase-admin";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface Body {
  email: string;
  password: string;
}

export const POST = async (req: NextRequest) => {
  const { email, password }: Body = await req.json();

  const allowedDomain = process.env.ALLOWED_DOMAIN;
  const emailDomain = email.split("@")[1];

  if (emailDomain !== allowedDomain) {
    return new NextResponse(
      JSON.stringify({
        message: `Email must belong to the ${allowedDomain} domain`,
      }),
      { status: 400 },
    );
  }

  try {
    await auth.createUser({
      email,
      password,
    });

    return new NextResponse(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 },
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: `Error creating user ${error}` }),
      { status: 500 },
    );
  }
};
