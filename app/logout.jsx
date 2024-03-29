import Link from "next/link";

export default function Logout() {
  return (
    <div className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-gradient-to-tr hover:from-orange-500 hover:to-indigo-500 transition duration-300 text-center">
      <Link href="/api/auth/logout">Logout</Link>
    </div>
  );
}
