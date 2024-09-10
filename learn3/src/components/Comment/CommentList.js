import React, { useState, useEffect } from 'react';
import { createComment, likeComment } from '../../api/commentApi';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        // Fetch comments logic here
    }, [postId]);

    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            await createComment({ postId, text: newComment });
            setNewComment('');
            // Refresh comments
        } catch (error) {
            console.error('Failed to add comment', error);
        }
    };

    const handleLikeComment = async (commentId) => {
        try {
            await likeComment(commentId, /* userId */);
            // Refresh comments
        } catch (error) {
            console.error('Failed to like comment', error);
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <form onSubmit={handleAddComment}>
                <input 
                    type="text" 
                    value={newComment} 
                    onChange={(e) => setNewComment(e.target.value)} 
                    placeholder="Add a comment" 
                    required 
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        {comment.text}
                        <button onClick={() => handleLikeComment(comment.id)}>Like</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;
