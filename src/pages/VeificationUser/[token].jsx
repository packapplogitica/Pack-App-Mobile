import VerificationUser from '@/components/template/VerificationUser/VerificationUser'
import axios from 'axios'
import React from 'react'

const VeificationUser = () => {
  return (
    <VerificationUser></VerificationUser>
  )
}



export async function getServerSideProps(context) {
    const token = context.params.token

  //   // console.log(token)
   
  
     const data = await axios.get(
       `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify/${token}`
   ) ;
    // console.log('la data',data)
  
     const response =  data.data;

       console.log('hola mundo',response)
  
    return {
      props: {
        response:'hola',
      },
    };
  }
  
  export default VeificationUser;