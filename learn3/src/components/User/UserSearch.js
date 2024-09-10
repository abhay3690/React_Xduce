import React, { useState } from 'react';
import { searchUsers } from '../../api/userApi';

const UserSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await searchUsers(query);
            setResults(response);
        } catch (error) {
            console.error('Search failed', error);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search users" 
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map(user => (
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserSearch;
