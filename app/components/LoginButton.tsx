"use client";
import Link from "next/link";
import { useAuth } from "../components/AuthContext";
import { useRouter } from "next/navigation";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function LoginButton() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  if (isLoggedIn) {
    return (
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all transform hover:scale-105"
      >
        <FiLogOut size={18} />
        Logout
      </button>
    );
  }

  return (
    <Link
      href="/login"
      className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all transform hover:scale-105 hover:from-purple-600 hover:to-pink-600"
    >
      <FiLogIn size={18} />
      Login
    </Link>
  );
}
