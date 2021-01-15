const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newText;
        return state;

        case SEND_MESSAGE:
            let newMessage = {
            id: 6,
            message: state.newMessage
        };

        state.messages.push(newMessage);
        state.newMessage = ""
        return state;
            
        default:
            return state;
    }
}

export default dialogsReducer;