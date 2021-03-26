import React from 'react';
import '../User.css'


function MapPosts({posts}){

    return(
        <div>
            {
                posts.map(post=>(
                    <ul className='list' key={post.id}>
                        <li> ID: {post.id}</li>
                        <li> Title: {post.title}</li>
                        <li>Body: {post.body}</li>
                    </ul>
                ))
            }
        </div>
    )

}

export default MapPosts;
