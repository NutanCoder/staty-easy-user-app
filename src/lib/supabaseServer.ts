import { CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}
export const supabaseServer = createServerClient(supabaseUrl, supabaseAnonKey, {
  cookies: {
    getAll: async () => {
      const cookieStore = await cookies();
      return cookieStore.getAll().map((cookie) => ({
        name: cookie.name,
        value: cookie.value,
      }));
    },
    setAll: async (
      cookiesToSet: {
        name: string;
        value: string;
        options: CookieOptions;
      }[]
    ) => {
      const cookieStore = await cookies();
      cookiesToSet.forEach((cookie) => {
        cookieStore.set(cookie.name, cookie.value, cookie.options);
      });
    },
  },
});
