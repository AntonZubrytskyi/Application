import React,{useState,useEffect} from 'react';
import axios from "axios";
import MapCommentsID from "./MapCommentId";
import './Post.css'


function FetchCommentsID(){

    const [posts, setPosts]= useState([]);
    const [id,setId]= useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res=>setPosts(res.data))
            .catch(error=>{
                console.log(error)
            })
    },[id])


    return(
        <div>
            Type PostID(1-100): <input type='number' value={id} onChange={e=>setId(e.target.value)}/>
            <MapCommentsID posts={posts}/>

        </div>
    )

}

export default FetchCommentsID;
