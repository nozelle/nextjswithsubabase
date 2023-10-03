import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

import SignOut from 'src/components/SignOut';
import Navbar from 'src/components/navbar';
import TEST from 'src/components/testhome';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in-otp');
  }

 


  return (
   <div>
    <Navbar/>
    
    <div className="card">
  <TEST/>
      <h2>User Profile</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">Last Signed In:</div>
      <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
      <Link className="button" href="/">
        Go Home
      </Link>
      <Link className="button" href="/dashborad">
        dashborad
      </Link>
  
      <SignOut />
      </div>
      </div>

  );
 }