import { ResetPasswordForm } from '@/components/molecules/ResetPassword/ResetPasswordForm';
import React from 'react'

const ResetPassword = ({newToken,data}) => {
    // console.log(data)
  return (
    <ResetPasswordForm token={newToken.newToken}></ResetPasswordForm>
  )
}

export async function getServerSideProps(context) {
    const token = context.query.token
  
  

    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verifyForgotPassword/${token}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )

      if (!data.ok) {
        // Si la respuesta no es exitosa, redirigir al usuario
        return {
          redirect: {
            destination: '/invalid-token', // Cambia esto a la ruta a la que quieras redirigir
            permanent: false,
          },
        };
      }
 
    const newToken = await data.json();
    console.log('e; nuevo token',newToken)
    return {
      props: {
        newToken,
      },
    };
    } catch (error) {
        // Si la respuesta no es exitosa, redirigir al usuario
        return {
          redirect: {
            destination: '/invalid-token', // Cambia esto a la ruta a la que quieras redirigir
            permanent: false,
          },
        };
    }
     
  }
  
export default ResetPassword