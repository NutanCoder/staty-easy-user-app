import { logoutAction } from "@/app/auth/actions";
import { ROUTES } from "@/lib/routes/routes";
import { supabaseServer } from "@/lib/supabaseServer";
import Link from "next/link";

export default async function Navbar() {
  const {
    data: { user },
  } = await supabaseServer.auth.getUser();
  const isLoggedIn = user != null;

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="max-w-4xl  flex justify-between items-center  mx-auto container">
        <Link href={ROUTES.HOME} className="text-xl font-bold text-blue-600">
          StayEasy PG
        </Link>

        <div className="flex gap-4 text-sm">
          <Link
            href={ROUTES.PROPERTIES}
            className="text-gray-700 hover:text-blue-600"
          >
            Properties
          </Link>
          {isLoggedIn && (
            <>
              <Link
                href={ROUTES.DASHBOARD}
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <Link
                href={ROUTES.PROFILE}
                className="text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link
                href={ROUTES.LOGIN}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href={ROUTES.REGISTER}
                className="text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
            </>
          )}
          {isLoggedIn && (
            <form action={logoutAction} method="POST">
              <button type="submit" className="text-red-600 hover:underline">
                Logout
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
