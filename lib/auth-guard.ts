import { supabase } from "@/lib/supabase";

export async function requireAuth(router: any) {
  const { data } = await supabase.auth.getUser();

  if (!data?.user) {
    router.push("/login");
    return null;
  }

  return data.user;
}