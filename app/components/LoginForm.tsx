"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
import { login as apiLogin } from "../lib/api"; // ✅ وارد کردن تابع login از lib/api

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      // 👇 صدا زدن API واقعی
      const data = await apiLogin(email, password);

      // ✅ بررسی اینکه توکن برگشته یا نه
      if (!data?.access_token) {
        throw new Error("Token not found in response");
      }

      // ✅ ذخیره‌ی توکن در Context و LocalStorage
      login(data.access_token);

      // ✅ هدایت کاربر به داشبورد
      router.push("/dashboard");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-center text-sm">{error}</p>
        )}
      </form>
    </div>
  );
}
