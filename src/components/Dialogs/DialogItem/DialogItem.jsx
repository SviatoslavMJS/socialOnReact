
import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"

const DialogItem = (props) => {
    return (
<div className={s.dialog}>
    <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
    </div>
    )
}


export default DialogItem;