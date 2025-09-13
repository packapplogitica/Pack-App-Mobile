import Loader from '@/components/molecules/Loader/Loader'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const LoaderAuthhSession = () => {
    const router = useRouter()

    useEffect(() => {
        const handleSignOut = async () => {
            try {
                await signOut({ redirect: false });
                router.push('/signin');
            } catch (error) {
                console.error('Error durante el cierre de sesión:', error);
                // Manejar el error según sea necesario
            }
        };

        handleSignOut();
    }, [router])
    return (
        <><Loader visible></Loader></>
    )
}

export default LoaderAuthhSession