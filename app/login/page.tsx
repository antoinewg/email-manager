'use client'

import { supabase } from "../../clients/supabase"

export default function Login() {
  return (
    <>
      <h1>this is the login page</h1>
      <button className="btn" onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}>Login with github</button>
    </>
  )
}
