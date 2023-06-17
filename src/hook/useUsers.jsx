import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useUsers = () => {
    const {user} = useContext(AuthContext);

    const { refetch, data: regUsers = [] } = useQuery({
        queryKey: ['userClass',user?.email],
        queryFn: async () => {
            const response = await fetch(`https://summer-camp-server-rho-woad.vercel.app/users`)
            
            return response.json()
          },
      })

      return [regUsers, refetch]
};

export default useUsers;