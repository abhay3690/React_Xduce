import React, { useState, useEffect } from 'react';
import { getChatMessages, createMessage } from '../../api/messageApi';

const ChatWindow = ({ chatId }) => {
    const [messages, setMessages] = useState([]);
    const [messageText, setMessageText] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await getChatMessages(chatId);
                setMessages(response);
            } catch (error) {
                console.error('Failed to fetch messages', error);
            }
        };

        fetchMessages();
    }, [chatId]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        try {
            await createMessage({ chatId, text: messageText });
            setMessageText('');
            // Refresh messages
            const response = await getChatMessages(chatId);
            setMessages(response);
        } catch (error) {
            console.error('Failed to send message', error);
        }
    };

    return (
        <div>
            <h2>Chat Window</h2>
            <div>
                <ul>
                    {messages.map(message => (
                        <li key={message.id}>{message.text}</li>
                    ))}
                </ul>
            </div>
            <form onSubmit={handleSendMessage}>
                <input 
                    type="text" 
                    value={messageText} 
                    onChange={(e) => setMessageText(e.target.value)} 
                    placeholder="Type a message" 
                    required 
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatWindow;
