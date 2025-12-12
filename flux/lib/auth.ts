import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword:{
        enabled:true,
    },
    socialProviders:{
        google:{
            clientId:process.env.GOOGLE_CLIENT_ID  as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET  as string,
    },
    // github:{
    //     clientId:process.env.GITHUB_CLIENT_ID  as string,
    //     clientSecret:process.env.GITHUB_CLIENT_SECRET  as string,
    // }
  },
  plugins:[nextCookies()],
  secret:process.env.BETTER_AUTH_SECRET as string,
  authUrl:process.env.BETTER_AUTH_URL as string,
});