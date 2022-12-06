import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(post)
        const newPost = {
            ...post, id: uuidv4()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form className="form">
            <input 
                className="my-input" 
                type="text" 
                placeholder="Post Name" 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <input 
                className="my-input" 
                type="text" 
                placeholder="Post description"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <button className="my-button" onClick={addNewPost}>Create post</button>
        </form>
    );
}
 
export default PostForm;