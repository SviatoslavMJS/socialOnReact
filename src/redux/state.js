import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";



let store = {
_state: {
    dialogsPage:{

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
  },
  
    profilePage: {

    posts: [
      {message: "Hello, how are you?", count: 5},
      {message: "Hi, it's my first project!", count: 23},
      {message: "Hello", count: 6},
      {message: " you?", count: 9},
    ],

    newPostText: "",
  }
 },

  _renderEntireTree () {console.log("RERENDER!!!")},

  getState() {
    return this._state;
  },
  
  dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._renderEntireTree(this._state);
  },

 subscribe (observer) {
        this._renderEntireTree = observer;
    }
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}; 

export let updateNewPostTextActionCreator = (newText) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: newText
  }
};

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
 

  window.state = store.getState();

  export default store;

   

   



  