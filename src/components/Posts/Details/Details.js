import React, {useState} from 'react';
import Popup from "./Popup";
import '../Posts.css'

function Details(){

    const [open,setOpen]=useState(false);
    const openPopup = (value) => {
        setOpen(value)
    };

    return(
        <div>
            {open === true ? <Popup openPopup={openPopup}/> : null}
            <button  className='btn3' onClick={()=>setOpen(true)}>Add new</button>
        </div>
    )

}

export default Details;
