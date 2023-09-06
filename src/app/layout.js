import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import AuthProvider from 'src/components/AuthProvider';

import 'src/styles/globals.css';

import {Providers} from "./providers";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <html lang="en">
      <body>
        <div >
          <main>
            <Providers>
            <AuthProvider accessToken={accessToken}>{children}</AuthProvider>
            </Providers>
          </main>
          
        </div>
      </body>
    </html>

  );
}
