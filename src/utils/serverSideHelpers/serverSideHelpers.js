import { getSession, signOut } from 'next-auth/react';

export async function handleServerSideAuth(context,slug,apiCall,isHomePage=false) {
 
    const session = await getSession(context);


    if (!session && isHomePage) {
        return {
            props: {
                data: null,
            },
        };
    }
    else if(!session?.isRegistrationComplete && context?.resolvedUrl !== '/complete-registration'){
        return {
            redirect: {
                destination: '/complete-registration',
                permanent: false,
            },
        }
    }
    else if(!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    }
    try {
        const result = await apiCall(session?.user?.token);
        if (result?.error?.statusCode === 400) {
            return {
                redirect: {
                    destination: `/invalid-acces${slug}`,
                    permanent: false,
                },
            };
        } else if(result?.error?.statusCode === 403){
            return {
              redirect: {
                destination: '/invalid-access', // Cambia esto a la ruta a la que quieras redirigir
                permanent: false,
              },
            };
        }else if (result?.error?.statusCode === 401) {
            return {
                redirect: {
                    destination: '/LoaderAuthhSession', // Cambia esto a la ruta a la que quieras redirigir
                    permanent: false,
                },
            }
        } else if (result?.notFound) {
            return {
                redirect: {
                    destination: '/404',
                    permanent: false,
                },
            };
        }
        else {
            return {            
                props: {
                    data: result,
                },
            };
        }
    } catch (error) {
        console.error('Error en la llamada a la API:', error);
        return {
            redirect: {
                destination: '/error',
                permanent: false,
            },
        };
    }
}