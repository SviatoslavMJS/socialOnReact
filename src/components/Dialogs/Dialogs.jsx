
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";



const Dialogs = (props) => {
    
    let dialogsPage = props.dialogsPage;

    let dialogsElements = dialogsPage.dialogs.map(elem => <DialogItem name={elem.name} id={elem.id} />);
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message} />);

    let updateNewMessageText = (event) => {
        let newText = event.target.value;
        props.updateNewMessageText(newText);
    };

    let sendMessage = () => {
        props.sendMessage();
    };

      return (
    
    <div className={s.dialogs}>
    
        <div className={s.dialogsItems}>

            { dialogsElements }  

        </div>

        <div className={s.dialogsMessages}>

            <div>{ messagesElements }</div>

            <div><textarea value={dialogsPage.newMessage} onChange={ updateNewMessageText } placeholder="Enter Message"></textarea></div>
            <div><button onClick={ sendMessage }>Send Message</button></div>
            
        </div>
    </div>
    )
}

export default Dialogs;