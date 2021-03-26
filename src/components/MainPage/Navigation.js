import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Users from "../Users/Users";
import Post from "../Post/Post";
import LinkToPages from "./LinkToPages";
import Posts from "../Posts/Posts";
import AllPosts from "../Users/AllPosts/AllPosts";
import Details from "../Posts/Details/Details";

function Navigation(){
    return(
        <div>
            <Router>
                <LinkToPages/>
                <Switch>
                    <Route path='/users' render={()=>{return <Users/>}}/>
                    <Route path='/allposts' render={()=>{return <AllPosts/>}}/>
                    <Route path='/posts' render={()=>{return <Posts/>}}/>
                    <Route path='/details' render={()=>{return <Details/>}}/>
                    <Route path='/post' render={()=>{return <Post/>}}/>
                </Switch>
            </Router>
        </div>
    )
}
export default Navigation;
