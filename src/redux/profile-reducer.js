const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {

    posts: [
      {message: "Hello, how are you?", count: 5},
      {message: "Hi, it's my first project!", count: 23},
      {message: "Hello", count: 6},
      {message: " you?", count: 9},
    ],

    newPostText: "",
  };

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0
              };
              state.posts.push(newPost);
              state.newPostText = "";
              return state;

         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText; 
             return state; 

         default: return state;    
    }
}

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

export default profileReducer;