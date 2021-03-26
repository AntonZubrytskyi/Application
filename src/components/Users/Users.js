import React from 'react';
import FetchUsers from "./FetchUsers";
import { Link } from "react-router-dom";
import './User.css'

function Users(){

    return(
        <div>
            <FetchUsers/>
            <Link  to='/allposts'><button className='btn' >Posts</button></Link>
        </div>
    )
}

export default Users;
