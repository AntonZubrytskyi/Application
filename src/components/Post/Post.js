import React, {useState} from 'react';

import FetchCommentsID from "./FetchCommentsId";
import './Post.css';
import EditPopup from "./EditPopup";
import DeletePopup from "./DeletePopup";


function Post(){

    const[open, setOpen]= useState(false);
    const [deletepost,setDeletePost]= useState(false)

    const deletePopup = (value) => {
        setDeletePost(value)
    };

    const openPopup = (value) => {
        setOpen(value)
    };

    return(
        <div>
            {open === true ? <EditPopup openPopup={openPopup}/> : null}
            {deletepost === true ? <DeletePopup deletePopup={deletePopup}/> : null}

            <FetchCommentsID/>

            <div className='div'>
            <button  className='btn1' onClick={()=>setOpen(!open)}>Edit</button>
            <button  className='btn2' onClick={()=>setDeletePost(!deletepost)}>Delete</button>
            </div>
        </div>
    )
}

export default Post;
