import React from 'react';
import './Post.css';
import EditForm from "./EditForm";

function EditPopup({openPopup}) {

    return(
        <>
            <div className='backgroundPopup' onClick={() => openPopup(false)}/>
            <div className='popupContainer'>
                <div className='popupContainerExitButton' onClick={() => openPopup(false)}>x</div>
               <span className='title'>Edit Post</span>
                <EditForm/>
            </div>
        </>
    )
}
export default EditPopup;
