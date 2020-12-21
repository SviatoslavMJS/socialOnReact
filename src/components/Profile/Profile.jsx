
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return (
     <div className={ s.content }>
        <div >
          <img className={s.image} src="https://image.shutterstock.com/image-photo/tropical-paradise-beach-white-sand-260nw-674128501.jpg" alt=""></img>
        </div> 
        <MyPosts/>
     </div>)
     }

     export default Profile;