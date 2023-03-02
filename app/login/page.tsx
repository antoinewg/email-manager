'use client'

import { supabase } from "../../utils/supabase"

export default function Login() {
  async function handleSignIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })

    console.log(data, error)
  }


  return (
    <>
      <h1>this is the login page</h1>
      <button className="btn" onClick={handleSignIn}>Login with github</button>
    </>
  )
}
