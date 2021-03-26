import React from 'react';
import './Post.css';
import DeleteForm from "./DeleteForm";

function DeletePopup({deletePopup}) {

    return(
        <>
            <div className='backgroundPopup' onClick={() => deletePopup(false)}/>
            <div className='popupContainer'>
                <div className='popupContainerExitButton' onClick={() => deletePopup(false)}>x</div>
                <span className='title'>Delete Post</span>
                <DeleteForm/>
            </div>
        </>
    )
}
export default DeletePopup;
