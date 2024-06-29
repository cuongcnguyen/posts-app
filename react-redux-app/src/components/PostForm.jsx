import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../app/features/postsSlice';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, body }));
        setTitle('');
        setBody('');
    };

    return (
        <form className='post-form' onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            <div className='post-form-title'>
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>
            <div className='post-form-body'>
                <label>Body</label>
                <textarea 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)} 
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
