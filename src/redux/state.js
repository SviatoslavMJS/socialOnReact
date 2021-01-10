import { renderEntireTree } from "../render";

let state = {
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
    ]
  },
  
    profilePage: {

    posts: [
      {message: "Hello, how are you?", count: 5},
      {message: "Hi, it's my first project!", count: 23},
      {message: "Hello", count: 6},
      {message: " you?", count: 9},
    ] 
  }
  
  };

  export let addPost = (postMessage) => {
     let newPost = {
       id: 5,
       message: postMessage,
       count: 0
     };

     state.profilePage.posts.push(newPost);
    
     renderEntireTree(state);
  }

  export default state;