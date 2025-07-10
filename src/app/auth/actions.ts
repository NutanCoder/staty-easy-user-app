"use server";

import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";

export async function loginAction(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabaseServer.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect(`/auth/login?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  await supabaseServer.auth.signOut();
  redirect("/");
}
export async function registerAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabaseServer.auth.signUp({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect("/dashboard");
}
