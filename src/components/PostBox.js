import React from 'react';
import "../views/PostBox.css";
import {Avatar,Button} from "@material-ui/core"; 
function PostBox(){
    return <div className="postBox">
        <form>
            <div className="postBox__input">
                <Avatar src="/gill1.jpg"></Avatar>
                <input placeholder="What's happening?"  type="text"></input>
            </div>
            <input  className="postBox__inputImage" placeholder="Optional: Enter image URL"  type="text"></input>
            <Button type="submit" className="postBox__postButton">Post</Button>
        </form>
    </div>
}
export default PostBox