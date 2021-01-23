
import { sendMessageCreator, updateNewMessageTextCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css"

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let store = props.store;

    let updateNewMessageText = (newText) => {
        store.dispatch(updateNewMessageTextCreator(newText) )
    };

    let sendMessage = () => {
        store.dispatch(sendMessageCreator())
    };

      return (
    <Dialogs updateNewMessageText={ updateNewMessageText } sendMessage={ sendMessage } dialogsPage={ state.dialogsPage } />
    )
};

export default DialogsContainer;