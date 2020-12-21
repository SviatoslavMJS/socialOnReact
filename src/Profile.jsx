import s from './Profile.module.css';

const Profile = () => {
    return (
<div className={s.content}>
        <div>
          <img src="https://image.shutterstock.com/image-photo/tropical-paradise-beach-white-sand-260nw-674128501.jpg"></img>
        </div>
        <div>avatar+description</div>

        <div>my posts
          <div>new post</div>
        </div>

        <div>
        <div>post 1</div>
        <div>post 2</div>
        </div>
     </div>)
     }

     export default Profile;