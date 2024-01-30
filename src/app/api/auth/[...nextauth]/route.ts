import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "@/lib/mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import FacebookProvider from "next-auth/providers/facebook";

interface Credentials {
  email: string;
  password: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        const { email, password } = credentials!;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User was not found and could not be created.");
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID as string,
      // clientSecret: process.env.GOOGLE_SECRET as string,
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ token, session }) {
      // Fetch user information from the database and add it to the session
      try {
        if (session.user && session.user.email) {
          await connectMongoDB();
          const user = await User.findOne({ email: session.user.email });

          if (!user) {
            throw new Error("User not found in the database.");
          }
        }
        return session;
      } catch (error) {
        console.error("Error during session callback:", error);
        throw new Error("An error occurred during session callback");
      }
    },
  },
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await NextAuth(req, res, authOptions);
};

export { handler as GET, handler as POST };
