import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => (
    <Provider store={store}>
        <div className='App'>
            <PostForm />
            <PostList />
        </div>
    </Provider>
);

export default App;
