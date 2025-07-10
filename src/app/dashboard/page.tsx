import { supabaseServer } from "@/lib/supabaseServer";
import React from "react";

async function Page() {
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();

  return (
    <div className="container mx-auto  my-4 max-w-4xl">
      <p>
        {session ? (
          <span>Welcome, {session.user.email}!</span>
        ) : (
          <span>Please log in to access your dashboard.</span>
        )}
      </p>
    </div>
  );
}

export default Page;
