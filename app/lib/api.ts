// lib/api.ts
// const API_URL = "https://api.escuelajs.co/api/v1";
const API_URL="https://api.escuelajs.co/api/v1"

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json(); // برمی‌گردونه { access_token, refresh_token }
}

export async function getProfile(token: string) {
  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json(); // اطلاعات کاربر
}
