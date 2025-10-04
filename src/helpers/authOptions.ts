import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth"{
  interface Session{
    user : {
      id : string;
      name : string | null;
      email : string | null;
      image : string | null;
    };
  }

  interface User{
    id : string;
      name : string | null;
      email : string | null;
      image : string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.error("Email or Password is missing");
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
          console.log("Response From Backend:", res);
          if (!res?.ok) {
            console.error("Login Failed", await res.text());
            return null;
          }

          const responseData = await res.json();
          const user = responseData.data;
          if (user?.id) {
            return {
              id: user?.id,
              name: user?.name,
              email: user?.email,
              image : user?.image
            };
          } else {
            return null;
          }
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token,user}) {
      if(user){
        token.id = user.id
      }
      return token
    },

    async session({session,token}){
      if(session?.user){
        session.user.id = token?.id as string
      }
      return session
    }
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login"
  }
}