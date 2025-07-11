import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import LoginFeature from "../components/login.form";
import { ROUTES } from "@/lib/routes/routes";

export const metadata: Metadata = {
  title: "Login Page | Stay Easy",
};

function Page() {
  return (
    <>
      <LoginFeature />
      <div className="flex flex-col items-center gap-2">
        <Link href={ROUTES.HOME} className="flex gap-2">
          Home
        </Link>
        <Link href={ROUTES.AUTH.REGISTER} className="flex">
          New User! Register
        </Link>
      </div>
    </>
  );
}

export default Page;
