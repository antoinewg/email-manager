'use client'

import { supabase } from "../../utils/supabase"

export default function Logout() {
  return (
    <>
      <h1>this is the logout page</h1>
      <button className="btn" onClick={() => supabase.auth.signOut()}>Logout</button>
    </>
  )
}
