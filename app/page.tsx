import Link from "next/link"
import { supabase } from "../clients/supabase"

export default async function Home() {
  const user = await supabase.auth.getUser()

  console.log(user)
  return (
    <div>

      <h1>
        I am the homepage!
      </h1>
      {!!user && <Link href='/login' className="btn">Logout</Link>}
    </div>
  )
}
