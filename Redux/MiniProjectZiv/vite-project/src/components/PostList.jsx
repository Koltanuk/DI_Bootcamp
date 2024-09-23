import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import PostItem from './PostItem';

const PostList = () => {
    const dispatch= useDispatch();
    const posts = useSelector(state =>state.posts);
    const selectedAuthor = useSelector(state => state.authors.selectedAuthor);

    useEffect(()=>{
        dispatch(fetchPosts());
}, [dispatch]);

    const filteredPosts = selectedAuthor
        ? posts.filter(post => post.userId === Number(selectedAuthor))
        : posts;

    return (
        <div>
        {filteredPosts.map(post => (
            <PostItem key={post.id} post={post} />
        ))}
        </div>
    );

};

export default PostList;