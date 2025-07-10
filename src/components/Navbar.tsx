import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        StayEasy PG
      </Link>
    </nav>
  );
}
