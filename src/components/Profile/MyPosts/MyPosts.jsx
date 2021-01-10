import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postElement = props.state.profilePage.posts.map((post) => <Post message={post.message} count={post.count} />);

  let txtareaElement = React.createRef();

  let addPost = () => {
    let text = txtareaElement.current.value;
    props.addPost(text);
    txtareaElement.current.value = ""
  }

    return (
      <div className={s.posts}>
        <h3>My Posts</h3>
        <div>
        <textarea className={ s.postsItem } ref={ txtareaElement }></textarea>
        <div className={ s.postsItem }>
             <button onClick={ addPost }>Add Post</button>
          </div>
        </div>
        
         {postElement}
        
     </div>)
     }

     export default MyPosts;