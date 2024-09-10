import React, { useEffect, useState } from 'react';
import { getUserChats } from '../../api/chatApi';

const ChatList = ({ userId }) => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await getUserChats(userId);
                setChats(response);
            } catch (error) {
                console.error('Failed to fetch chats', error);
            }
        };

        fetchChats();
    }, [userId]);

    return (
        <div>
            <h2>Your Chats</h2>
            <ul>
                {chats.map(chat => (
                    <li key={chat.id}>{chat.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;
