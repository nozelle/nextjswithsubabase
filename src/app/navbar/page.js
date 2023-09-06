import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
//import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

import SignOut from 'src/components/navbar';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return <SignOut/>
    
}
