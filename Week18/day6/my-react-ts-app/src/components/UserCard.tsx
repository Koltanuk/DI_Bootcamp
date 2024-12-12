import React from 'react';

interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name || 'Unknown'}</p>
            <p>Age: {age !== undefined ? age : 'Not provided'}</p>
        </div>
    );
};

export default UserCard;