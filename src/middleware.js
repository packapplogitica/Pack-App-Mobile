/*
LUEGO DEL LANZAMIENTO: CAMBIAR TODO EL CODIGO POR ESTO:
*/

export { default } from "next-auth/middleware";


export const config = {
  matcher: ["/perfil/:path*", "/mis-paquetes/:path*"],
};


// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// // Middleware de next-auth para manejo de autenticación
// export default withAuth(async function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const hostname = req.headers.get("host");

//   const unrestrictedDomains = ['packapp-frontend-service.vercel.app', 'packapp-frontend-service-packapplogiticas-projects.vercel.app/', 'localhost'];

//    // Verificar si el hostname está en la lista de dominios sin restricciones
//    if (unrestrictedDomains.some(domain => hostname.includes(domain))) {
//     return NextResponse.next();
//   }

//   // Permitir acceso a /nosotros, /registration, y archivos estáticos
//   const allowedPaths = [
//     '/nosotros',
//     '/registration',
//     '/favicon.ico',
//     '/logo/',
//     '/logo/logo.svg',
//     '/assets/',
//     '/assets/particulares.jpeg',
//     '/assets/profesionales.jpeg',
//     '/assets/ocasionales.jpeg',
//     '/assets/contactImage.jpeg',
//     '/api/auth/',
//     '/api/auth/signin/',
//     '/api/auth/signin',
//     '/signin',
//     '/_next/',
//     '/node_modules',
//   ];

//   // Permitir acceso a rutas que empiezan con /_next/ (archivos estáticos y construidos)
//   if (
//     allowedPaths.some(path => pathname.startsWith(path))
//     || 
//     pathname.startsWith('/_next/')
//   ) {
//     return NextResponse.next();
//   }

//   // Redirigir todas las demás rutas a /landing
//   return NextResponse.redirect(new URL('/nosotros', req.url));
// });

// // Configuración del matcher
// export const config = {
//   matcher: ["/perfil/:path*", "/mis-paquetes/:path*", "/:path*"],
// };
