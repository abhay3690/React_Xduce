import React, { useState, useEffect } from 'react';
import { getStoriesByUserId } from '../../api/storyApi';

const StoryList = ({ userId }) => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await getStoriesByUserId(userId);
                setStories(response);
            } catch (error) {
                console.error('Failed to fetch stories', error);
            }
        };

        fetchStories();
    }, [userId]);

    return (
        <div>
            <h2>Stories</h2>
            <ul>
                {stories.map(story => (
                    <li key={story.id}>{story.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default StoryList;
