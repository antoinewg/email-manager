import 'server-only';

import { createServerClient } from '../../utils/supabase-server';
import NewPost from './new-post';
import RealtimePosts from './realtime-posts';

export const revalidate = 0;

export default async function Realtime() {
  const supabase = createServerClient();
  const { data } = await supabase.from('posts').select('*');

  return (
    <>
      <RealtimePosts serverPosts={data || []} />
      <NewPost />
    </>
  );
}
