import React, { useState, useEffect } from 'react';
import { getUserById, updateUser } from '../../api/userApi';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserById(userId);
                setUser(response);
            } catch (error) {
                console.error('Failed to fetch user', error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleUpdate = async () => {
        try {
            await updateUser(userId, user);
            alert('Profile updated!');
        } catch (error) {
            console.error('Failed to update profile', error);
        }
    };

    if (!user) return null;

    return (
        <div>
            <h2>User Profile</h2>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
            {/* Other user details */}
            <button onClick={handleUpdate}>Update Profile</button>
        </div>
    );
};

export default UserProfile;
