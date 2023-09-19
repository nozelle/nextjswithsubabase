
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function getSession() {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    return session;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
export default async function Index() {
 


  const supabase = createServerComponentClient({ cookies });
  const users =await supabase.auth.getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user.email)
  console.log(user.id)
  const { data: profiles} = await supabase.from("profiles").select('last_name ,Active_orders').eq('id',user.id)

  return (
    <ul className="my-auto text-foreground">
      {profiles?.map((country) => (
        <p>{country.Active_orders}.{country.last_name}</p>
      ))}
    </ul>
  );
}