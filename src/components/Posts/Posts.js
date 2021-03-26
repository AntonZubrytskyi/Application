import React from 'react';
import { Link } from "react-router-dom";
import FetchPostsID from "./FetchPostsID";
import "./Posts.css"

function Posts(){

    return(
        <div>
             <FetchPostsID/>
             <Link  to='/details'><button className='btn'>Details</button></Link>
        </div>
    )
}
export default Posts;
