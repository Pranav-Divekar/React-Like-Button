import 'react'
import { useState } from 'react';

let styles = {color:"red"}
export default function LikeButton(){
    let [isLiked,setisLiked] = useState(false);
    let likeToggle =()=>{
        setisLiked(!isLiked);
        }
    return(
        <>
        <p onClick={likeToggle}>
        {
            isLiked ? <i style={styles} className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
        }
        </p>
        </>
    );
}
