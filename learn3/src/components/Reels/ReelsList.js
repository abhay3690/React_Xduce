import React, { useState, useEffect } from 'react';
import { getAllReels, getUserReels } from '../../api/reelsApi';

const ReelsList = ({ userId }) => {
    const [reels, setReels] = useState([]);

    useEffect(() => {
        const fetchReels = async () => {
            try {
                const response = await getUserReels(userId);
                setReels(response);
            } catch (error) {
                console.error('Failed to fetch reels', error);
            }
        };

        fetchReels();
    }, [userId]);

    return (
        <div>
            <h2>Reels</h2>
            <ul>
                {reels.map(reel => (
                    <li key={reel.id}>{reel.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReelsList;
