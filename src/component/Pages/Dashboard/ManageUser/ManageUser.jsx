import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const ManageUser = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <p>LoadSheding</p>
        </div>
    );
};

export default ManageUser;