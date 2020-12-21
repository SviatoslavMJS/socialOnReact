import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div className={s.posts}>
        <div>
        <textarea></textarea>
        <button>Add</button>
        <button>Remove</button>
        </div>
      
        <Post message="Hello, how are you?" count="20"/>
        <Post message="Hi, it's my first project!" count="15" />
        
     </div>)
     }

     export default MyPosts;