
import s from './Post.module.css';

const Post = (props) => {
    return (
      
        <div className={s.item}>
           <img className={s.avatar} src="https://i.guim.co.uk/img/media/8282695e7f658f7c8e708290c93f14b84f0c8a68/0_483_3600_2161/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=acfcc7c8fb733c6a4a2185c337500247" alt=""/> 
         {props.message}
        <div className={s.like}>{props.count} Like</div>
        </div>
     )
     }

     export default Post;