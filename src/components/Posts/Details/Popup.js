import React from 'react';
import '../Posts.css';
import PostForm from "./PostForm";


function Popup({openPopup}) {

    return(
        <>
            <div className='backgroundPopup' onClick={() => openPopup(false)}/>
            <div className='popupContainer'>
                <div className='popupContainerExitButton' onClick={() => openPopup(false)}>x</div>
               <span className='title'>Add new post</span>
               <PostForm/>
            </div>
        </>
    )
}

export default Popup;
