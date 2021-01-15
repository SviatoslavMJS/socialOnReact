
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.message} />);

    let updateNewMessageText = (event) => {
        let newText = event.target.value;
        props.dispatch(updateNewMessageTextCreator(newText) )
    };

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    };

      return (
    
    <div className={s.dialogs}>
    
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>

        <div className={s.dialogsMessages}>
            <div>{ messagesElements }</div>
            <div><textarea value={props.state.dialogsPage.newMessage} onChange={ updateNewMessageText } placeholder="Enter Message"></textarea></div>
            <div><button onClick={ sendMessage }>Send Message</button></div>
            
        </div>
    </div>
    )
}

export default Dialogs;