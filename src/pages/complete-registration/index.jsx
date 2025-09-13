
import CompleteRegistrationForm from '@/components/template/CompleteRegistration/CompleteRegistrationForm'
import apiClient from '@/utils/apiClient'
import { handleServerSideAuth } from '@/utils/serverSideHelpers/serverSideHelpers'
import { useSession } from 'next-auth/react'
import React from 'react'
 
const CompleteRegistration = ({data}) => {

    // console.log('la nueva data',data)
  return (
    <div>
      <CompleteRegistrationForm user={data}></CompleteRegistrationForm>
    </div>
  )
}


export async function getServerSideProps(context) {
  
    return handleServerSideAuth(context,null,async (token) => {
      return await apiClient.get(`profiles/complete-registration`, token);
    });
    
    }

export default CompleteRegistration


