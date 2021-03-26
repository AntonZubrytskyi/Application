import React from 'react';
import './Link.css'
import {Link} from 'react-router-dom'

function LinkToPages(){
    return(
        <nav>
            <ul>
                <li>
                    <Link  to='/users'>Users</Link>
                </li>
                <li>
                    <Link  to='/allposts'>AllPosts</Link>
                </li>
                <li>
                    <Link to='/posts'> Posts</Link>
                </li>
                <li>
                    <Link to='/details'> Details</Link>
                </li>
                <li>
                    <Link to='/post'>Post</Link>
                </li>
            </ul>
        </nav>
    )
}
export default LinkToPages;
