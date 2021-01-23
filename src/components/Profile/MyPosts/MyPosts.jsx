import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 
  
  let postElement = props.profilePage.posts.map((post) => <Post message={post.message} count={post.count} />);

  let txtareaElement = React.createRef();
  

  let addPost = () => {
    props.addPost();
   //props.dispatch(addPostActionCreator());
  }

  let updateNewPostText = () => {
    let newText = txtareaElement.current.value;
    props.updateNewPostText(newText);
    //props.dispatch(updateNewPostTextActionCreator(newText))
  }

    return (
      <div className={s.posts}>
        <h3>My Posts</h3>
        <div>
        <textarea className={ s.postsItem } 
        ref={ txtareaElement } 
        onChange={ updateNewPostText } 
        value={props.profilePage.newPostText} >
        </textarea>
        <div className={ s.postsItem }>
             <button onClick={ addPost }>Add Post</button>
          </div>
        </div>
        
         {postElement}
        
     </div>)
     }

     export default MyPosts;