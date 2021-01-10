
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
     <div className={ s.content }>
        <ProfileInfo />
        <MyPosts state={props.state} addPost={props.addPost}/>
     </div>)
     }

     export default Profile;