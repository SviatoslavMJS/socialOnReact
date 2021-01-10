import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
          <img className={s.image} src="https://image.shutterstock.com/image-photo/tropical-paradise-beach-white-sand-260nw-674128501.jpg" alt=""></img>
        <div>Ava + Description</div>
        </div> 
    )
}

export default ProfileInfo;