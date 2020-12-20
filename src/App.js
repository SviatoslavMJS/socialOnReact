import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="app-wraper">
     <header className="header">
       <img src="https://springboardpr.com/wp-content/uploads/2018/06/green-mountain-coffee-roasters-logo.png"></img>
     </header>
     <nav className="nav">
       <div><a>Profile</a></div>
       <div><a>Profile</a></div>
       <div><a>Messages</a></div>
       <div><a>News</a></div>
       <div><a>Music</a></div>
       <div><a>Settings</a></div>
     </nav>
     <div className="content">
        <div>
          <img src="https://lh3.googleusercontent.com/proxy/joTRg0CdBbFnSEYwIHtfduEq1sA81oP9Ni8Jy5IvCqDZbKJPSmTZUrmc-klqiXyDOJlE6rpOf9GSvv2zmMaT4TnMyPFK60WoH-JKKQoIv6xA1_G5EP6zVRnC3mMpOqYkrFp4r3SSyPkWBe_divKR"></img>
        </div>
        <div>avatar+description</div>

        <div>my posts
          <div>new post</div>
        </div>

        <div>
        <div>post 1</div>
        <div>post 2</div>
        </div>
     </div>
    
    </div>
  );
}

export default App;
