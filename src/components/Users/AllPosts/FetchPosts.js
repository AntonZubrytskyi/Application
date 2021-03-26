import React,{useState,useEffect} from 'react';
import axios from "axios";
import MapPosts from "./MapPosts";

function FetchPosts(){

    const [posts, setPosts]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>setPosts(res.data))
            .catch(error=>{
                console.log(error)
            })
    },[])
    return(
        <div>
            <MapPosts posts={posts}/>
        </div>
    )
}
export default FetchPosts;
