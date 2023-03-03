
import NextAuth from "next-auth"
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import jwt from "jsonwebtoken"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  }),
    callbacks: {
    async session({ session, user }) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET
      let supabaseAccessToken: string | undefined = undefined

      if (signingSecret) {
        supabaseAccessToken = jwt.sign({
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
        }, signingSecret)
      }

      return {
        ...session,
        supabaseAccessToken,
      }
    },
  },
})
