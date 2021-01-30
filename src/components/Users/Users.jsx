import s from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, folowed: true, fullname: "Dmitry K.", status: "I am boss too!", location: { country: "Belarus", city: "Minsk" }, photoSRC: "https://media1.popsugar-assets.com/files/thumbor/l5xfaicywqC411ClRcSV8KXxs7E/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2011/03/12/4/192/1922398/fa9e135c04ca9384_jason/i/Jason-Statham.jpg" },
            { id: 2, folowed: false, fullname: "Olga S.", status: "I am boss too!", location: { country: "United States", city: "New York" }, photoSRC: "https://st2.depositphotos.com/1814084/5219/i/600/depositphotos_52196443-stock-photo-angelina-jolie.jpg" },
            { id: 3, folowed: true, fullname: "Alexandr R.", status: "I am boss too!", location: { country: "Ukrine", city: "Kyiv" }, photoSRC: "https://media.vanityfair.com/photos/5f7b78a06cac71ad7f787f72/2:3/w_854,h_1281,c_limit/donaldtrumphospital.jpg" }
        ])
    }

    
    

    return (
        <div className={s.items}>{
            props.users.map(u => {
           return <div key={u.id} className={s.user}>
            <div>
                <img src={u.photoSRC} alt="AVA" ></img>
            </div>
            <div>
                {u.followed 
                ? <button onClick={()=> props.unfollow(u.id)}>Unfollow</button> 
                : <button onClick={()=> props.follow(u.id)}>Follow</button>}
            </div>
            <div>{u.fullname}</div>
            <div>{u.status}</div>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </div>})
        }</div>
    )
};

export default Users;