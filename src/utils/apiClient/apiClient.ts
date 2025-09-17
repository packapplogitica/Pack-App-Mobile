import { Preferences } from "@capacitor/preferences";

const SESSION_KEY = "user-session";

async function getToken() {
  const { value } = await Preferences.get({ key: SESSION_KEY });
  if (!value) return null;
  const session = JSON.parse(value);
  return session?.token || null;
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const token = await getToken();

  const headers = {
    ...(options.headers || {}),
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`, {
    ...options,
    headers,
  });

  if (res.status === 401) {
    // token inválido o expirado
    await Preferences.remove({ key: SESSION_KEY });
    window.location.href = "/signin"; // 🔄 redirige a login
    throw new Error("Sesión expirada, por favor vuelve a iniciar sesión.");
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Error en la API");
  }

  return data;
}
