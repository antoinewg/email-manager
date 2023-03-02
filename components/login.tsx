'use client';

import { useState } from 'react';
import { useSupabase } from './supabase-provider';

// Supabase auth needs to be triggered client-side
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { supabase, session } = useSupabase();

  const handleEmailLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      console.log({ error });
    }
    console.log(data)
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <div className="grid place-content-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md flex flex-col bg-center">
        <div className="mb-4">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input input-bordered"
            id="email"
            type="text"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </div>
        <div className="mb-6">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input input-bordered"
            id="password"
            type="password"
            placeholder="******"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button className="btn" type="button" onClick={handleEmailLogin} >
            Sign In
          </button>
        </div>
      </div>
    </div >
  )
}
