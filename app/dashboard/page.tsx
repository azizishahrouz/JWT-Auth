"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// ✅ تعریف دقیق نوع User
type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role?: string; // اختیاری
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => { 
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }

    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data: User) => setUser(data))
      .catch(() => router.push("/"));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
                                   
  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600 animate-pulse">Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard 🧠</h2>
          <nav className="space-y-3">
            <button className="w-full text-left text-gray-700 hover:text-blue-600 transition">
              📊 Overview
            </button>
            <button className="w-full text-left text-gray-700 hover:text-blue-600 transition">
              ⚙️ Settings
            </button>
            <button className="w-full text-left text-gray-700 hover:text-blue-600 transition">
              💬 Messages
            </button>
          </nav>
        </div>
          
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition cursor-pointer "
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10">
        <div className="bg-white shadow-md p-8 rounded-2xl max-w-xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <Image
              src={user.avatar}
              alt="avatar"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-100 shadow-md mb-4"
            />
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Welcome, <span className="text-blue-600">{user.name}</span> 👋
            </h1>
            <p className="text-gray-500 mb-6">{user.email}</p>

            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-blue-600">24</h3>
                <p className="text-sm text-gray-500">Tasks</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-green-600">12</h3>
                <p className="text-sm text-gray-500">Messages</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-purple-600">4</h3>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
