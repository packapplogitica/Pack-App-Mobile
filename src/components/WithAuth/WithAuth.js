// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { useAuth } from '@/hooks/useAuth';

// export function withAuth(WrappedComponent, { apiEndpoint = null, isHomePage = false } = {}) {
//   return function WithAuth(props) {
//     const { user, loading, validatedData,error,signOut} = useAuth({ apiEndpoint });
//     const router = useRouter();

//     console.log('el status',error)
//     useEffect(() => {
//       if (!loading && !user) {
//         if (isHomePage) {
//           // No redirige si es homepage y no hay sesión
//         } else {
//           router.push('/signin');
//         }
//       // } else if (!loading && user && !user.isRegistrationComplete && router.pathname !== '/complete-registration') {
//       //   router.push('/complete-registration');
//       } else if (!loading && user && apiEndpoint) {
//         // Si hay error de validación, redirige según estado
//         if (error?.response?.status) {
//           switch (error?.response?.status) {
//             case 400:
//               router.push(`/invalid-acces${router.pathname}`);
//               break;
//             case 403:
//               router.push('/invalid-access');
//               break;
//             case 401:
//               signOut()
//               break;
//             case 404:
//               router.push('/404');
//               break;
//             default:
//               router.push('/error');
//           }
//         }
//       }
//     }, [user, loading, router, isHomePage, apiEndpoint]);

//     if (!user && !isHomePage) return null;

//     return <WrappedComponent {...props} user={user} />;
//   };
// }



"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSessionProvider } from "../../context/SessionProvider";

export default function WithAuth({ children, isHomePage = false }) {
  const { session, loading } = useSessionProvider();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (loading) return; // todavía cargando session

    if (!session) {
      if (!isHomePage && router.pathname !== "/signin") {
        router.push("/signin");
      }
      setChecking(false);
    } else if (
      !session.isRegistrationComplete &&
      router.pathname !== "/complete-registration"
    ) {
      router.push("/complete-registration");
    } else {
      setChecking(false);
    }
  }, [session, loading, router, isHomePage]);

  if (checking) return <p>Cargando sesión...</p>;

  return <>{children}</>;
}
