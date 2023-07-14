
import { nextAuthOptions } from "@/app/utils/nextAuthOptions/nextAuthOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };