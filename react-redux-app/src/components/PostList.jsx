import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../app/features/postsSlice';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);
    const postStatus = useSelector(state => state.posts.status);
    const error = useSelector(state => state.posts.error);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (postStatus === 'succeeded') {
        content = (
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        );
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div className='post-list'>
            <h2>Posts</h2>
            {content}
        </div>
    );
};

export default PostList;
