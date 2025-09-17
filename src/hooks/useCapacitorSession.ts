// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { Preferences } from "@capacitor/preferences";

const SESSION_KEY = "user-session";

export function useCapacitorSession() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Al montar: recuperar sesión guardada
  useEffect(() => {
    (async () => {
      const { value } = await Preferences.get({ key: SESSION_KEY });
      if (value) {
        setSession(JSON.parse(value));
      }
      console.log('la key',JSON.parse(value))
      setLoading(false);
    })();
  }, []);
  
  // Login → llamar a tu backend
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error en login");

      const userSession = {
        token: data.user.token,
        email: data.user.email,
        profile: data.user.profile,
        isRegistrationComplete: data.user.isRegistrationComplete,
        registrationStep: data.user.registrationStep,
      };

      // Guardar en Preferences
      await Preferences.set({
        key: SESSION_KEY,
        value: JSON.stringify(userSession),
      });

      setSession(userSession);
      return { ok: true ,url:'/'};
    } catch (err: any) {
      console.error("Login error:", err.message);
      return { ok: false, error: err.message };
    }
  };

  const getPreferences = async () =>{
    const cookie =  await Preferences.get({key:'user-session'})
    console.log('la cookie',JSON.parse(cookie.value))
  }

  // Logout
  const logout = async () => {
    console.log('entra en la funcion')
    await Preferences.remove({ key: SESSION_KEY });
    setSession(null);
  };

  return { session, login, logout, loading ,getPreferences};
}

