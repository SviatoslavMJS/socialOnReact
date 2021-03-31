import s from "./Users.module.css";
import * as axios from "axios";        //install AXIOS library

const Users = (props) => {
    console.log(props)
    // if (props.users.length === 0) {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => {
    //         console.log (response.data)
        
    //         props.setUsers(response.data)
    //     })
   // };

    return (
        <div className={s.items}>{
            props.users.map(u => {
           return <div key={u.id} className={s.user}>
            <div>
                <img src={ (u.location.photoSRC) ? u.location.photoSRC :"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"} alt="AVA" ></img>
            </div>
            <div>
                {u.followed 
                ? <button onClick={()=> props.unfollow(u.id)}>Unfollow</button> 
                : <button onClick={()=> props.follow(u.id)}>Follow</button>}
            </div>
            <div>{u.name}</div>
            <div><span className={s.status}>{u.status}</span> </div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </div>})
        }</div>
    )
};

export default Users;