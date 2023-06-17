import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useClass = email => {

    const {user} = useContext(AuthContext);

    const { refetch, data: userClass = [] } = useQuery({
        queryKey: ['userClass',user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-camp-server-rho-woad.vercel.app/class?email=${user.email}`)
            
            return response.json()
          },
      })

      return [userClass, refetch]
    
}

export default useClass;