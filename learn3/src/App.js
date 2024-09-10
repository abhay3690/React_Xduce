// src/App.js
import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext'; // Ensure path is correct
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/User/UserProfile';
import UserSearch from './components/User/UserSearch';
import ChatList from './components/chat/ChatList';
import ChatWindow from './components/chat/ChatWindow';
import PostList from './components/Post/PostList';
import ReelsList from './components/Reels/ReelsList';
import StoryList from './components/Story/StoryList';
import './src/styles.css';

const App = () => {
    const { token, login, logout } = useContext(AuthContext);

    return (
        <AuthProvider>
            <div>
                {!token ? (
                    <>
                        <Login onLoginSuccess={login} />
                        <Register />
                    </>
                ) : (
                    <>
                        <button onClick={logout}>Logout</button>
                        <UserProfile userId={1} />
                        <UserSearch />
                        <ChatList userId={1} />
                        <ChatWindow chatId={1} />
                        <PostList userId={1} />
                        <ReelsList userId={1} />
                        <StoryList userId={1} />
                    </>
                )}
            </div>
        </AuthProvider>
    );
};

export default App;
