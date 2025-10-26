"use client";
import Link from "next/link";
import { useAuth } from "./AuthContext";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>

      <div className="flex items-center gap-4">
        <Link href="/" className="hover:text-gray-200">Home</Link>
        <Link href="/about" className="hover:text-gray-200">About</Link>
        <Link href="/contact" className="hover:text-gray-200">Contact</Link>

        {isLoggedIn ? (
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full transition transform hover:scale-105"
          >
            <FiLogOut size={18} /> Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-full transition transform hover:scale-105"
          >
            <FiLogIn size={18} /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}
