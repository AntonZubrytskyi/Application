import React,{useState,useEffect} from 'react';
import axios from "axios";

import MapPostsID from "./MapPostsID";


function FetchPostsID(){

    const [posts, setPosts]= useState([]);
    const [id,setId]= useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res=>setPosts(res.data))
            .catch(error=>{
                console.log(error)
            })
    },[id])

    return(
        <div>
           Type UserID(1-10):
            <input
            type='number'
            value={id}
            onChange={e=>setId(e.target.value)}
            />
            <MapPostsID posts={posts}/>
        </div>
    )
}
export default FetchPostsID;
