'use client';

import { signIn } from "next-auth/react"

// Supabase auth needs to be triggered client-side
export default function Login() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
