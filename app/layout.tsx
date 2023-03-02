import 'server-only';

import SupabaseListener from '../components/supabase-listener';
import SupabaseProvider from '../components/supabase-provider';
import Login from '../components/login';
import { createServerClient } from '../utils/supabase-server';

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../lib/database.types';
import './globals.css';

// import NavBar from './NavBar'

export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Login />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
