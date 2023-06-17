import React from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import useClass from '../../../../hook/useClass';

const MyClass = () => {
    const [userClass] = useClass();
    return (
        <div>
            <SectionTitle Title="Selected Classes" TitleDetails="Need to payment for enroll"></SectionTitle>
            <p>{userClass?.length}</p>
        </div>
    );
};

export default MyClass;