import { Metadata } from "next";
import React from "react";
import RegisterFeature from "../components/register.form";
import Link from "next/link";
import { ROUTES } from "@/lib/routes/routes";

export const metadata: Metadata = {
  title: "Register Page | Stay Easy",
};

function Page() {
  return (
    <>
      <RegisterFeature />
      <div className="flex flex-col items-center gap-2">
        <Link href={ROUTES.HOME} className="flex gap-2">
          Home
        </Link>
        <Link href={ROUTES.LOGIN} className="flex">
          Already Account! Login
        </Link>
      </div>
    </>
  );
}

export default Page;
