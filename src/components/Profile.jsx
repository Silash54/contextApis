import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Please Login!</div>;
    }

    return (
        <div>
            <h1>Profile of User</h1>
            <div>Username: {user.username} and user password is {user.password}</div>
        </div>
    );
}

export default Profile;
