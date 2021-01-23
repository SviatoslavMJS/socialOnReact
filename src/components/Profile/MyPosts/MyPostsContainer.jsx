import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let store = props.store;

  let addPost = () => {
   store.dispatch(addPostActionCreator());
  };

  let updateNewPostText = (newText) => {
    store.dispatch(updateNewPostTextActionCreator(newText))
  };

    return (
      <MyPosts addPost={ addPost} updateNewPostText={ updateNewPostText } profilePage={ state.profilePage }/>
    )
}

     export default MyPostsContainer;