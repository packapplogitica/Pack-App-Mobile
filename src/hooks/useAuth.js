// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { Capacitor } from '@capacitor/core';
// import { Preferences } from '@capacitor/preferences';
// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const STORAGE_KEY = 'userToken';

// export function useAuth({ apiEndpoint = null } = {}) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const storage = Capacitor.isNativePlatform()
//     ? Preferences
//     : {
//         get: async ({ key }) => ({ value: localStorage.getItem(key) }),
//         set: async ({ key, value }) => localStorage.setItem(key, value),
//         remove: async ({ key }) => localStorage.removeItem(key),
//       };

//   // Query para validar token y fetch al endpoint especificado
//   const { data: validatedData, isLoading: validating, error } = useQuery({
//     queryKey: ['userData', apiEndpoint],
//     queryFn: async () => {
//       const { value: token } = await storage.get({ key: STORAGE_KEY });
//       if (!token) throw new Error('No token');
//       const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/orders/prueba`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return res.data;
//     },
//     // enabled: !!user && !!apiEndpoint,
//     retry: false,
//   });

//   useEffect(() => {
//     async function loadSession() {
//       try {
//         const { value: token } = await storage.get({ key: STORAGE_KEY });
//         if (token) {
//           const payload = JSON.parse(atob(token.split('.')[1]));
//           setUser({
//             ...payload,
//             token,
//           });
//         }
//       } catch (error) {
//         console.error('Error loading session:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadSession();
//   }, []);

//   useEffect(() => {
//     if (validatedData) {
//       setUser(validatedData.user || user);
//     } else if (error) {
//       // No manejamos redirección aquí; lo hará withAuth
//     }
//   }, [validatedData, error]);

//   const signIn = async (email, password) => {
//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: email.toLowerCase(), password }),
//       });
//       const data = await res.json();
//       if (!data.user) throw new Error(data.message?.message || 'Error en credenciales');
//       const userData = {
//         ...data.user.profile,
//         token: data.user.token,
//         email: data.user.email,
//         isRegistrationComplete: data.user.isRegistrationComplete,
//         registrationStep: data.user.registrationStep,
//       };
//       await storage.set({ key: STORAGE_KEY, value: data.user.token });
//       setUser(userData);
//       return { ok: true, url: '/' };
//     } catch (error) {
//       return { ok: false, error: error.message };
//     }
//   };

//   const signOut = async () => {
//     await storage.remove({ key: STORAGE_KEY });
//     setUser(null);
//     router.push('/signin');
//   };

//   const updateSession = async (updates) => {
//     setUser(prev => ({ ...prev, ...updates }));
//   };

//   return {
//     user,
//     loading: loading || validating,
//     signIn,
//     signOut,
//     updateSession,
//     validatedData,
//     error
//   };
// }