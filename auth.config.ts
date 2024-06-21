import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

 
import { LoginSchema } from "./lib/zodSchema/login";
import { dbConnect } from "./lib/dbconnect";
import { user } from "./lib/schema/user.schema";
type user={
  email:string,
  password:string
}
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
              await dbConnect()
              const isUser:user|null=await user.findOne({email})
         
          if (!isUser || !isUser.password) return null;

          if (password != isUser.password) {
            throw new Error("email or password incorrect");
          }
          return isUser;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
