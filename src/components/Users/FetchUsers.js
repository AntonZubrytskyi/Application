import React,{useState,useEffect} from 'react';
import axios from "axios";
import MapUsers from "./MapUsers";

function FetchUsers(){

    const [users, setUsers]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res=>setUsers(res.data))
            .catch(error=>{
                console.log(error)
            })
    },[])

    return(
        <div>
            <MapUsers users={users}/>
        </div>
    )
}

export default FetchUsers;
