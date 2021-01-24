const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {

    posts: [
      {message: "Hello, how are you?", count: 5},
      {message: "Hi, it's my first project!", count: 23},
      {message: "Hello", count: 6},
      {message: " you?", count: 9},
    ],

    newPostText: "it"
  };

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                count: 0
              };
         
            // let stateCopy = {...state};
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = "";
              return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
              };
          
         case UPDATE_NEW_POST_TEXT: 
          //  let stateCopy = {...state};
          //      stateCopy.newPostText = action.newText; 
             return {
               ...state,
               newPostText: action.newText
             }; 
        

         default: return state;
        
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

export default profileReducer;