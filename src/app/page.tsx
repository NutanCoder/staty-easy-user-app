import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ROUTES } from "@/lib/routes/routes";

export const metadata: Metadata = {
  title: "Homepage",
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-blue-700">Stay Easy PG</h1>
        <p className="mt-4 text-gray-600">
          Comfortable & Affordable Paying Guest Homes
        </p>
        <div className="mt-8 space-x-4">
          <Link href={ROUTES.LOGIN}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link href={ROUTES.REGISTER}>
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
