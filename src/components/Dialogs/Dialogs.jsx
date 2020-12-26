
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
    <div className={s.dialogs}>
    
        <div className={s.dialogsItems}>
            <div className={s.dialog}>Dmytry</div>
            <div className={s.dialog +" "+ s.active}>Victoria</div>
            <div className={s.dialog}>Yevgeny</div>
            <div className={s.dialog}>Vladimir</div>
            <div className={s.dialog}>Vladilen</div>
            <div className={s.dialog}>Olga</div>
        </div>

        <div className={s.dialogsMessages}>
        
            <div className={s.message}>Hello!</div>
            <div className={s.message}>How are you?</div>
            <div className={s.message}>Very good!</div>
        </div>
    </div>
    )
}

export default Dialogs;