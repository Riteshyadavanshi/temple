"use server";

 
import * as z from "zod";

 

import { AuthError } from "next-auth";
import { LoginSchema } from "@/lib/zodSchema/login";
import { signIn, signOut } from "@/auth";

export const LogIn = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error("server error");
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/invoice",
      redirect: true,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          throw err;
      }
      throw err;
    }
  }
};

export const logOut = async () => {
  try {
    await signOut({
      redirect: true,
      redirectTo: "/",
    });
  } catch (err) {
    throw err;
  }
};
