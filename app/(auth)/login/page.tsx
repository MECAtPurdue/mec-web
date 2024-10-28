"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import useBannerStore from "@/lib/store/useBannerStore";
import { useAuth } from "@/lib/firebase/useAuth";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({
    message: "Email must be a valid email.",
  }),
  password: z.string(),
});

function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { signIn } = useAuth();
  const { setBanner } = useBannerStore();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { user } = await signIn(values.email, values.password);
      setBanner("Login successful! Redirecting...", "Success");

      setTimeout(() => {
        if (!user.emailVerified) {
          return router.push("/verify");
        }

        router.push("/");
      }, 2000);
    } catch (e) {
      setBanner(JSON.stringify(e), "Error");
    }
  };

  return (
    <>
      <h1 className="text-2xl">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
      <Link href="/signup">
        <p className="hover:underline">
          Don&apos;t have an account? Create one here!
        </p>
      </Link>
    </>
  );
}

export default LoginPage;
