const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {

    dialogs: [
     {name:'Dmitry', id: 1},
     {name:'Yevgeny', id: 2},
     {name:'Vika', id: 3},
     {name:'Vladimir', id: 4},
     {name:'Sasha', id: 5},
     {name:'Olga', id: 6} 
   ],
   
   messages: [
     {id: 1, message: "Hello"},
     {id: 2, message: "How are you?"},
     {id: 3, message: "Very good!"},
     {id: 4, message: "Yo"},
     {id: 5, message: "No"},
     {id: 6, message: "No"}
   ],

   newMessage: "",
 }

const dialogsReducer = (state = initialState, action) => {

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

export let updateNewMessageTextCreator = (newText) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: newText
    }
  };
  
  export let sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  };

export default dialogsReducer;