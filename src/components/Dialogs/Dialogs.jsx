
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";



const Dialogs = (props) => {

    
    let dialogsElements = props.state.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);

    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message} />);

      return (
    
    <div className={s.dialogs}>
    
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>

        <div className={s.dialogsMessages}>
            { messagesElements }
        </div>
    </div>
    )
}

export default Dialogs;