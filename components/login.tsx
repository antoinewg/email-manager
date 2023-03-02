'use client';

import { useSupabase } from './supabase-provider';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'


// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

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
    <div className="grid place-content-center ">
      <div className="bg-slate-100 max-w-lg p-12 rounded">
        <Auth
          supabaseClient={supabase}
          providers={['google', 'github']}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </div>
  )
}
  // <div className="grid place-content-center">
  //   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md flex flex-col bg-center">
  //     <div className="mb-4">
  //       <label className="label" htmlFor="email">
  //         Email
  //       </label>
  //       <input
  //         className="input input-bordered"
  //         id="email"
  //         type="text"
  //         placeholder="example@gmail.com"
  //         value={email}
  //         onChange={e => setEmail(e.currentTarget.value)}
  //       />
  //     </div>
  //     <div className="mb-6">
  //       <label className="label" htmlFor="password">
  //         Password
  //       </label>
  //       <input
  //         className="input input-bordered"
  //         id="password"
  //         type="password"
  //         placeholder="******"
  //         value={password}
  //         onChange={e => setPassword(e.currentTarget.value)}
  //       />
  //     </div>
  //     <div className="flex items-center justify-end">
  //       <button className="btn" type="button" onClick={handleEmailLogin} >
  //         Sign In
  //       </button>
  //     </div>
  //   </div>
  // </div >
