import React, { useState, useEffect } from 'react';
import { getPostByUserId, deletePost, likePost } from '../../api/postApi';

const PostList = ({ userId }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPostByUserId(userId);
                setPosts(response);
            } catch (error) {
                console.error('Failed to fetch posts', error);
            }
        };

        fetchPosts();
    }, [userId]);

    const handleLikePost = async (postId) => {
        try {
            await likePost(postId, userId);
            // Refresh posts
        } catch (error) {
            console.error('Failed to like post', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await deletePost(postId, userId);
            // Refresh posts
        } catch (error) {
            console.error('Failed to delete post', error);
        }
    };

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        {post.text}
                        <button onClick={() => handleLikePost(post.id)}>Like</button>
                        <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
